import type { LoaderReturnType } from "$live/types.ts";
import Text from "deco-sites/fashion/components/ui/Text.tsx";
import Container from "deco-sites/fashion/components/ui/Container.tsx";
import ProductGallery, { Columns } from "../product/ProductGallery.tsx";

import type {
  FilterToggleValue,
  ProductListingPage,
} from "deco-sites/std/commerce/types.ts";
import Pagination from "../ui/Pagination.tsx";

export interface Props {
  /**
   * @description Number of products per line on grid
   */
  columns: Columns;
  page: LoaderReturnType<ProductListingPage | null>;
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
}: Omit<Props, "page"> & { page: ProductListingPage }) {
  const { products, filters, pageInfo } = page;
  const category = filters.find((filter) => filter.key === "Categorias");
  const categories = category?.values as FilterToggleValue[];

  return (
    <Container class="px-4 sm:py-10 flex flex-col gap-12">
      <ul class="flex gap-6 flex-col lg:flex-row flex-wrap items-center justify-center">
        {categories.map((category) => (
          <li>
            <a
              href={category.url}
              class="font-serif font-bold text-xl lg:text-2xl text-gray-500 hover:text-black"
            >
              {category.label} ({category.quantity})
            </a>
          </li>
        ))}
      </ul>

      <div class="flex flex-row">
        <ProductGallery products={products} columns={columns} />
      </div>

      <div class="flex flex-row items-center justify-center gap-2 my-4 mt-6">
        <Pagination pageInfo={pageInfo} />
      </div>
    </Container>
  );
}

function CollectionData({ page, ...props }: Props) {
  if (!page) {
    return <NotFound />;
  }

  return <Result {...props} page={page} />;
}

export default CollectionData;
