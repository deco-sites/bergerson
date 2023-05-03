import Pagination from "../ui/Pagination.tsx";
import Container from "deco-sites/fashion/components/ui/Container.tsx";
import Text from "deco-sites/fashion/components/ui/Text.tsx";
import SearchControls from "deco-sites/fashion/islands/SearchControls.tsx";
import ViewSendEvent from "deco-sites/fashion/islands/ViewSendEvent.tsx";
import { mapProductToAnalyticsItem } from "deco-sites/std/commerce/utils/productToAnalyticsItem.ts";
import { useOffer } from "deco-sites/fashion/sdk/useOffer.ts";
import ProductGallery, { Columns } from "../product/ProductGallery.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";

export interface Props {
  page: LoaderReturnType<ProductListingPage | null>;
  /**
   * @description Number of products per line on grid
   */
  columns: Columns;
  resultsOnly?: boolean;
}

function NotFound() {
  return (
    <div class="w-full flex justify-center items-center py-10">
      <Text>Not Found!</Text>
    </div>
  );
}

function Result({
  page,
  columns,
  resultsOnly,
}: Omit<Props, "page"> & { page: ProductListingPage }) {
  const { products, filters, breadcrumb, pageInfo, sortOptions } = page;

  if (resultsOnly) {
    return (
      <Container class="px-4 sm:py-10">
        <ProductGallery products={products} columns={columns} />
      </Container>
    );
  }

  return (
    <>
      <Container class="px-4 sm:py-6">
        <SearchControls
          filters={filters}
          sortOptions={sortOptions}
          breadcrumb={breadcrumb}
        />

        <div class="flex flex-row">
          <ProductGallery products={products} columns={columns} />
        </div>

        <div class="flex flex-row items-center justify-center gap-2 my-4 mt-6">
          <Pagination pageInfo={pageInfo} />
        </div>
      </Container>
      <ViewSendEvent
        event={{
          name: "view_item_list",
          params: {
            // TODO: get category name from search or cms setting
            item_list_name: "",
            item_list_id: "",
            items: page.products?.map((product) =>
              mapProductToAnalyticsItem({
                ...(useOffer(product.offers)),
                product,
                breadcrumbList: page.breadcrumb,
              })
            ),
          },
        }}
      />
    </>
  );
}

function SearchResult({ page, ...props }: Props) {
  if (!page) {
    return <NotFound />;
  }

  return <Result {...props} page={page} />;
}

export default SearchResult;
