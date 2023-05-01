import type { LoaderFunction } from "$live/types.ts";
import { createClient } from "deco-sites/std/commerce/vtex/client.ts";
import { toProduct } from "deco-sites/std/commerce/vtex/transform.ts";
import type { StateVTEX } from "deco-sites/std/commerce/vtex/types.ts";
import { withSegment } from "deco-sites/std/commerce/vtex/withSegment.ts";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";

export interface Props {
  /**
   * @title Items per page
   * @description number of products per page to display
   */
  count: number;
  config: Array<{
    /**
     * @$comment it will match the pathname (e.g.: colecoes/romance)
     */
    matcher: string;
    /**
     * @$comment https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/products/search
     */
    fq?: string;
  }>;
}

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

  const pathname = url.pathname.toLocaleLowerCase();
  const { fq } = props.config.find(({ matcher }) => matcher === pathname) ?? {};

  const count = props.count ?? 12;
  const page = Number(url.searchParams.get("page")) || 0;
  const _from = page * count;
  const _to = (page + 1) * count - 1;

  const searchArgs = {
    segment,
    _from,
    _to,
    fq,
  };

  // search products on VTEX. Feel free to change any of these parameters
  const vtexProducts = await vtex.catalog_system.products.search(searchArgs);

  // Transform VTEX product format into schema.org's compatible format
  // If a property is missing from the final `products` array you can add
  // it in here
  const products = vtexProducts.map((p) =>
    toProduct(p, p.items[0], 0, { url, priceCurrency: vtex.currency() })
  );

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
        itemListElement: [],
        numberOfItems: 0,
      },
      filters: [],
      sortOptions: [],
      products,
      pageInfo: {
        nextPage: hasNextPage ? `?${nextPage.toString()}` : undefined,
        previousPage: hasPreviousPage
          ? `?${previousPage.toString()}`
          : undefined,
        currentPage: page,
      },
    },
  };
});

export default legacyPLPLoader;
