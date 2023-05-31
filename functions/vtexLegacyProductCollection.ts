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
  /** @description query to use on search */
  query: string;
  /** @description total number of items to display */
  count: number;
  //  TODO: Allow writting enum names
  // * @enumNames ["relevance", "greater discount", "arrivals", "name asc", "name desc", "most ordered", "price asc", "price desc"]
  /**
   * @description search sort parameter
   */
  sort?:
    | ""
    | "price:desc"
    | "price:asc"
    | "orders:desc"
    | "name:desc"
    | "name:asc"
    | "release:desc"
    | "discount:desc";

  // TODO: pattern property isn't being handled by RJSF
  /**
   * @description Collection ID or (Product Cluster id). For more info: https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/products/search .
   * @pattern \d*
   */
  collection?: string[];
}

/**
 * @title Legacy product list loader
 * @description Usefull for shelves and static galleries.
 */
const legacyProductListLoader: LoaderFunction<
  Props,
  Product[] | null,
  StateVTEX
> = withSegment(async (
  req,
  ctx,
  props,
) => {
  const { global: { configVTEX }, segment } = ctx.state;
  const vtex = createClient(configVTEX);

  const count = props.count ?? 12;
  const query = props.query || "";
  const O = props.sort || "";

  const vtexProducts = await Promise.all(
    props.collection?.map(async (productClusterId) => {
      return await vtex.catalog_system.products.search({
        fq: `productClusterIds:${productClusterId}`,
        term: query,
        _from: 0,
        _to: Math.max(count - 1, 0),
        O: O as LegacySort,
        segment,
      });
    }) ?? [],
  );

  const products = vtexProducts.flat().map((p) =>
    toProduct(p as LegacyProduct, p.items[0], 0, {
      baseUrl: req.url,
      priceCurrency: vtex.currency(),
    })
  ) ?? [];

  return {
    data: products,
  };
});

export default legacyProductListLoader;
