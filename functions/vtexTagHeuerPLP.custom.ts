import type { LiveState, LoaderFunction } from "$live/types.ts";
import { toProduct } from "deco-sites/std/commerce/vtex/transform.ts";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";
import type { Props as TagHeuerConfig } from "deco-sites/bergerson/sections/TagHeuer.global.tsx";

import {
  ConfigVTEX,
  createClient,
} from "deco-sites/std/commerce/vtex/client.ts";

/**
 * @title Product listing page loader
 * @description Returns data ready for search pages like category,brand pages
 */
const legacyPLPLoader: LoaderFunction<
  null,
  ProductListingPage | null,
  LiveState<{ TagHeuer?: TagHeuerConfig; configVTEX?: ConfigVTEX }>
> = async (
  req,
  ctx,
) => {
  const url = new URL(req.url);
  const { global: { configVTEX, TagHeuer } } = ctx.state;
  const vtex = createClient(configVTEX);

  const slug: string = ctx.params?.slug!;
  const matching = TagHeuer?.collections?.find((col) => col.slug === slug);

  if (!matching) {
    return {
      data: null,
      status: 404,
    };
  }

  // search products on VTEX. Feel free to change any of these parameters
  const fq = `productClusterIds:${matching.clusterId}`;
  const vtexProducts = await vtex.catalog_system.products.search({ fq });

  // Transform VTEX product format into schema.org's compatible format
  // If a property is missing from the final `products` array you can add
  // it in here
  const products = vtexProducts.map((p) =>
    toProduct(p, p.items[0], 0, { url, priceCurrency: vtex.currency() })
  );

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
        nextPage: undefined,
        previousPage: undefined,
        currentPage: 0,
      },
    },
  };
};

export default legacyPLPLoader;
