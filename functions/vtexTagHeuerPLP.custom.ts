import type { FnContext, LoaderFunction } from "$live/types.ts";
import type { Props as TagHeuerConfig } from "deco-sites/bergerson/sections/TagHeuer.global.tsx";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";

import { Account } from "deco-sites/std/packs/vtex/accounts/vtex.ts";
import loader from "deco-sites/std/packs/vtex/loaders/legacy/productListingPage.ts";

/**
 * @title Product listing page loader
 * @description Returns data ready for search pages like category,brand pages
 */
const legacyPLPLoader: LoaderFunction<
  null,
  ProductListingPage | null,
  FnContext<{ global: { TagHeuer?: TagHeuerConfig; configVTEX?: Account } }>
> = async (
  req,
  ctx,
) => {
  const { TagHeuer } = ctx.state.global;

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
  return { data: await loader({ fq, count: 1 }, req, ctx.state) };
};

export default legacyPLPLoader;
