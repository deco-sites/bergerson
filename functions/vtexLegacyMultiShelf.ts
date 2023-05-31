import type { LoaderFunction } from "$live/types.ts";
import { createClient } from "deco-sites/std-legacy/commerce/vtex/client.ts";
import { StateVTEX } from "deco-sites/std-legacy/commerce/vtex/types.ts";
import {
  withSegment,
} from "deco-sites/std-legacy/commerce/vtex/withSegment.ts";
import { Product } from "deco-sites/std/commerce/types.ts";
import type {
  LegacyProduct,
  LegacySort,
} from "deco-sites/std/packs/vtex/types.ts";
import { toProduct } from "deco-sites/std/packs/vtex/utils/transform.ts";

export interface Props {
  /** @description total number of items to display */
  count: number;
  /**
   * @description Collection ID or (Product Cluster id). For more info: https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/products/search .
   * @pattern \d*
   */
  collection: Array<{
    id?: string;
    term?: string;
    order?: string;
  }>;
}

/**
 * @title Legacy product list loader
 * @description Usefull for shelves and static galleries.
 */
const legacyProductListLoader: LoaderFunction<
  Props,
  Product[][] | null,
  StateVTEX
> = withSegment(async (
  req,
  ctx,
  props,
) => {
  const { global: { configVTEX }, segment } = ctx.state;
  const vtex = createClient(configVTEX);

  const count = props.count ?? 12;

  const results = props.collection.map(async (config) => {
    const searchParams = new URLSearchParams();
    if (config.id) searchParams.append("fq", `productClusterIds:${config.id}`);

    const vtexProducts = await vtex.catalog_system.products.search({
      fq: searchParams.get("fq") ?? "",
      _from: 0,
      _to: Math.max(count - 1, 0),
      segment,
      term: config.term,
      O: (config.order ?? "") as LegacySort,
    });

    return vtexProducts.map((p) =>
      toProduct(p as LegacyProduct, p.items[0], 0, {
        baseUrl: req.url,
        priceCurrency: vtex.currency(),
      })
    );
  });

  return { data: await Promise.all(results) };
});

export default legacyProductListLoader;
