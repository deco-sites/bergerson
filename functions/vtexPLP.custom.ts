import type { LoaderFunction } from "$live/types.ts";
import {
  ClientVTEX,
  createClient,
} from "deco-sites/std/commerce/vtex/client.ts";
import { toProduct } from "deco-sites/std/commerce/vtex/transform.ts";
import { slugify } from "deco-sites/std/commerce/vtex/utils/slugify.ts";
import { withSegment } from "deco-sites/std/commerce/vtex/withSegment.ts";
import type {
  Filter,
  FilterToggle,
  ProductListingPage,
} from "deco-sites/std/commerce/types.ts";
import type {
  LegacyFacet,
  LegacySort,
  PageType,
} from "deco-sites/std/commerce/vtex/types.ts";
import type { StateVTEX } from "deco-sites/std/commerce/vtex/types.ts";

export interface Props {
  /**
   * @description overides the query term
   */
  term?: string;
  /**
   * @title Items per page
   * @description number of products per page to display
   */
  count: number;
  /**
   * @description FullText term
   * @$comment https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/products/search
   */
  ft?: string;
  /**
   * @$comment https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/products/search
   */
  fq?: string;
  /**
   * @description map param
   */
  map?: string;
}

const sortOptions = [
  { value: "OrderByScoreDESC", label: "Selecione" },
  { value: "OrderByReleaseDateDESC", label: "Data de lançamento" },
  { value: "OrderByPriceASC", label: "Menor preço" },
  { value: "OrderByPriceDESC", label: "Maior preço" },
  { value: "OrderByTopSaleDESC", label: "Mais vendidos" },
  { value: "OrderByNameDESC", label: "A-Z" },
  { value: "OrderByNameASC", label: "Z-A" },
  { value: "OrderByBestDiscountDESC", label: "Melhor desconto" },
];

const segmentsFromTerm = (term: string) => term.split("/").filter(Boolean);

export const pageTypesFromPathname = async (
  term: string,
  vtex: ClientVTEX,
) => {
  const segments = segmentsFromTerm(term);

  const results = await Promise.all(
    segments.map((_, index) =>
      vtex.catalog_system.portal.pageType({
        slug: segments.slice(0, index + 1).join("/"),
      })
    ),
  );

  return results.filter((result) => PAGE_TYPE_TO_MAP_PARAM[result.pageType]);
};

export const pageTypesToBreadcrumbList = (
  pages: PageType[],
  filters: Filter[],
  url: URL,
) => {
  const filteredPages = pages
    .filter(({ pageType }) =>
      pageType === "Category" || pageType === "Department" ||
      pageType === "SubCategory"
    );

  const pagesBreadcrumb = filteredPages.map((page, index) => {
    const position = index + 1;
    const slug = filteredPages.slice(0, position).map((x) => slugify(x.name!));

    return ({
      "@type": "ListItem" as const,
      name: page.name!,
      item: new URL(`/${slug.join("/")}`, url.origin).href,
      position,
    });
  });

  const activeFilters: FilterToggle[] = filters.filter((filter) => {
    if (filter["@type"] === "FilterRange") return false;
    return filter.values.find((v) => v.selected);
  }) as FilterToggle[];

  const filtersBreadcrumb = activeFilters.map((filter, index) => {
    const selectedValue = filter.values.find((v) => v.selected);
    const position = index + 1;

    return ({
      "@type": "ListItem" as const,
      name: selectedValue!.label,
      item: selectedValue!.url,
      position,
    });
  });

  const allFilters = [...pagesBreadcrumb, ...filtersBreadcrumb];

  // deno-lint-ignore no-explicit-any
  return allFilters.reduce<any>((unique, filter) => {
    // deno-lint-ignore no-explicit-any
    if (unique.find((u: any) => u.name === filter.name)) {
      return unique;
    }

    return [...unique, filter];
  }, []);
};

const PAGE_TYPE_TO_MAP_PARAM = {
  Brand: "b",
  Category: "c",
  Department: "c",
  SubCategory: "c",
  Collection: "productClusterIds",
  Cluster: "productClusterIds",
  Search: "ft",
  FullText: null,
  Product: null,
  NotFound: null,
};

const getMapAndTerm = (
  pageTypes: PageType[],
) => {
  const term = pageTypes
    .map((type, index) =>
      type.url
        ? segmentsFromTerm(
          new URL(`http://${type.url}`).pathname,
        )[index]
        : null
    )
    .filter(Boolean)
    .join("/");

  const map = pageTypes
    .map((type) => PAGE_TYPE_TO_MAP_PARAM[type.pageType])
    .filter(Boolean)
    .join(",");

  return [map, term];
};

function getValidFilters(filters: Filter[]) {
  const isToggle = (filter: Filter): filter is FilterToggle => {
    return filter["@type"] === "FilterToggle";
  };

  const redundantFilters = (filter: Filter): boolean => {
    return filter.key !== "Departments" && filter.key !== "Brands";
  };

  return filters.filter(isToggle).filter(redundantFilters);
}

const unselect = (facet: LegacyFacet, url: URL, map: string) => {
  const mapSegments = map.split(",");

  // Do not allow removing root facet to avoid going back to home page
  if (mapSegments.length === 1) {
    return `${url.pathname}${url.search}`;
  }

  const index = mapSegments.findIndex((segment) => segment === facet.Map);
  mapSegments.splice(index, index > -1 ? 1 : 0);
  const newUrl = new URL(
    url.pathname.replace(`/${facet.Value}`, ""),
    url.origin,
  );
  newUrl.search = url.search;
  if (mapSegments.length > 0) {
    newUrl.searchParams.set("map", mapSegments.join(","));
  }

  return `${newUrl.pathname}${newUrl.search}`;
};

const legacyFacetToFilter = (
  name: string,
  facets: LegacyFacet[],
  url: URL,
  map: string,
): Filter | null => {
  const mapSegments = map.split(",");
  const pathSegments = url.pathname.split("/");

  return {
    "@type": "FilterToggle",
    quantity: facets.length,
    label: name,
    key: name,
    values: facets.map((facet) => {
      const selected = mapSegments.includes(facet.Map) &&
        pathSegments.includes(facet.Value);
      const href = selected ? unselect(facet, url, map) : facet.LinkEncoded;

      return ({
        value: facet.Value,
        quantity: facet.Quantity,
        url: href,
        label: facet.Name,
        selected,
      });
    }),
  };
};

/**
 * @title Product listing page loader
 * @description Returns data ready for search pages like category,brand pages
 */
const legacyPLPLoader: LoaderFunction<
  Props,
  ProductListingPage | null,
  StateVTEX
> = withSegment(async (
  req,
  ctx,
  props,
) => {
  const url = new URL(req.url);
  const { global: { configVTEX }, segment } = ctx.state;
  const vtex = createClient(configVTEX);

  const count = props.count ?? 12;
  const maybeMap = props.map || url.searchParams.get("map") || undefined;
  const maybeTerm = props.term || ctx?.params?.["0"] || "";
  const page = Number(url.searchParams.get("page")) || 0;
  const O = (url.searchParams.get("O") || url.searchParams.get("sort") ||
    undefined) as LegacySort;
  const ft = props.ft || url.searchParams.get("ft") ||
    url.searchParams.get("q") || "";
  const fq = props.fq || url.searchParams.get("fq") || "";
  const _from = page * count;
  const _to = (page + 1) * count - 1;

  const pageTypes = await pageTypesFromPathname(maybeTerm, vtex);

  const missingParams = typeof maybeMap !== "string" || !maybeTerm;
  const [map, term] = missingParams
    ? getMapAndTerm(pageTypes)
    : [maybeMap, maybeTerm];

  const searchArgs = {
    segment,
    term,
    map,
    _from,
    _to,
    O,
    ft,
    fq,
  };
  Object.keys(searchArgs).forEach((key) =>
    (searchArgs as Record<string, unknown>)[key] === undefined &&
    delete (searchArgs as Record<string, unknown>)[key]
  );

  // search products on VTEX. Feel free to change any of these parameters
  const [vtexProducts, vtexFacets] = await Promise.all([
    vtex.catalog_system.products.search(searchArgs),
    vtex.catalog_system.facets.search(searchArgs),
  ]);

  // Transform VTEX product format into schema.org's compatible format
  // If a property is missing from the final `products` array you can add
  // it in here
  const products = vtexProducts.map((p) =>
    toProduct(p, p.items[0], 0, { url, priceCurrency: vtex.currency() })
  );

  const filters = getValidFilters(
    Object.entries({
      Departments: vtexFacets.Departments,
      Brands: vtexFacets.Brands,
      ...vtexFacets.SpecificationFilters,
    }).map(([name, facets]) => {
      return legacyFacetToFilter(name, facets, url, map);
    })
      .flat()
      .filter((x): x is Filter => Boolean(x)),
  );

  const itemListElement = pageTypesToBreadcrumbList(pageTypes, filters, url);

  const hasNextPage = Boolean(page < 50 && products.length === count);
  const hasPreviousPage = page > 0;
  const nextPage = new URLSearchParams(url.searchParams);
  const previousPage = new URLSearchParams(url.searchParams);

  if (hasNextPage) {
    nextPage.set("page", (page + 1).toString());
  }

  if (hasPreviousPage) {
    previousPage.set("page", (page - 1).toString());
  }

  return {
    data: {
      "@type": "ProductListingPage",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement,
        numberOfItems: itemListElement.length,
      },
      filters,
      products,
      pageInfo: {
        nextPage: hasNextPage ? `?${nextPage.toString()}` : undefined,
        previousPage: hasPreviousPage
          ? `?${previousPage.toString()}`
          : undefined,
        currentPage: page,
      },
      sortOptions,
    },
  };
});

export default legacyPLPLoader;
