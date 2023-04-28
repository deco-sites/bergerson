import Button from "deco-sites/fashion/components/ui/Button.tsx";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import Filters from "deco-sites/fashion/components/search/Filters.tsx";
import Sort from "deco-sites/fashion/components/search/Sort.tsx";
import Modal from "deco-sites/fashion/components/ui/Modal.tsx";
import Breadcrumb from "deco-sites/fashion/components/ui/Breadcrumb.tsx";
import { useSignal } from "@preact/signals";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";
type Props = Pick<ProductListingPage, "filters" | "breadcrumb" | "sortOptions">;

function SearchControls(
  { filters, breadcrumb, sortOptions }: Props,
) {
  const open = useSignal(false);
  const lastBreadcrumbIndex = breadcrumb.itemListElement.length - 1;
  const lastBreadcrumb = breadcrumb.itemListElement[lastBreadcrumbIndex];

  return (
    <div class="flex flex-col justify-between mb-4 p-4 sm:p-0 md:gap-4 border-b-1 border-default border-dotted md:border-b-0">
      <div class="flex flex-row items-center sm:p-0 mb-2">
        <Breadcrumb itemListElement={breadcrumb?.itemListElement} />
      </div>

      <div class="flex flex-col">
        <h1 class="font-bold uppercase">{lastBreadcrumb?.name}</h1>
        <hr class="mt-4 md:mb-6" />

        <div class="hidden md:block">
          <Filters filters={filters} />
        </div>
      </div>

      <div class="flex flex-row items-center justify-between md:(gap-4 mt-12) gap-2 pt-4 sm:pt-0">
        <div class="md:hidden flex-1 border-1 border-solid border-gray-400 rounded">
          <Button
            variant="tertiary"
            onClick={() => (open.value = true)}
            class="md:hidden w-full h-[31px]"
          >
            <Icon id="FilterList" width={16} height={16} />
            Filtrar
          </Button>
        </div>

        {sortOptions.length > 0 && <Sort sortOptions={sortOptions} />}
      </div>

      <Modal
        loading="lazy"
        title="Filtrar"
        mode="sidebar-right"
        open={open.value}
        onClose={() => {
          open.value = false;
        }}
      >
        <div class="p-4">
          <Filters filters={filters} />
        </div>
      </Modal>
    </div>
  );
}

export default SearchControls;
