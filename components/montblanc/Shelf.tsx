import ProductCard from "deco-sites/fashion/components/product/ProductCard.tsx";
import Container from "deco-sites/fashion/components/ui/Container.tsx";
import { Slider } from "deco-sites/fashion/components/ui/Slider.tsx";
import SliderControllerJS from "deco-sites/fashion/islands/SliderJS.tsx";
import Button from "deco-sites/fashion/components/ui/Button.tsx";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import { useId } from "preact/hooks";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";
import ViewSendEvent from "deco-sites/fashion/islands/ViewSendEvent.tsx";
import { mapProductToAnalyticsItem } from "deco-sites/std/commerce/utils/productToAnalyticsItem.ts";
import { useOffer } from "deco-sites/fashion/sdk/useOffer.ts";

export interface Props {
  title: string;
  products: LoaderReturnType<Product[] | null>;
  itemsPerPage?: number;
}

function ProductShelf({
  title,
  products,
}: Props) {
  const id = useId();

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <Container
      id={id}
      class="grid grid-cols-[38px_1fr_38px] grid-rows-[64px_1fr_38px_1fr] py-20 px-0 sm:px-5"
    >
      <div class="row-start-1 col-span-full flex flex-row w-full px-5">
        <div class="flex flex-1 w-full text-xl md:text-2xl font-semibold">
          {title}
        </div>

        {/** CONTROLS DESKTOP */}
        <div class="hidden md:flex flex-row gap-4">
          <div class="bg-interactive-inverse border-black border h-10 w-10">
            <Button
              class="h-10 w-10"
              variant="icon"
              data-slide="prev"
              aria-label="Previous item"
            >
              <Icon
                size={16}
                id="ChevronLeft"
                strokeWidth={3}
                class="text-black"
              />
            </Button>
          </div>
          <div class="bg-interactive-inverse border-black border h-10 w-10">
            <Button
              class="h-10 w-10"
              variant="icon"
              data-slide="next"
              aria-label="Next item"
            >
              <Icon
                size={16}
                id="ChevronRight"
                strokeWidth={3}
                class="text-black"
              />
            </Button>
          </div>
        </div>
      </div>

      <Slider
        class="gap-6 col-span-full row-start-2 row-end-5 scrollbar-none overflow-x-scroll"
        snap="snap-center sm:snap-start block first:ml-6 sm:first:ml-0 last:mr-6 sm:last:mr-0"
      >
        {products?.map((product) => (
          <div class="min-w-[270px] max-w-[270px] sm:min-w-[292px] sm:max-w-[292px]">
            <ProductCard product={product} preload={false} />
          </div>
        ))}
      </Slider>

      {/** CONTROLS MOBILE */}
      <div class="block relative md:hidden z-10 col-start-1 row-start-3">
        <div class="absolute bg-interactive-inverse border-black border left-5">
          <Button
            class="h-10 w-10"
            variant="icon"
            data-slide="prev"
            aria-label="Previous item"
          >
            <Icon
              size={16}
              id="ChevronLeft"
              strokeWidth={3}
              class="text-black"
            />
          </Button>
        </div>
      </div>
      <div class="block relative md:hidden z-10 col-start-3 row-start-3">
        <div class="absolute bg-interactive-inverse border-black border right-5">
          <Button
            class="h-10 w-10"
            variant="icon"
            data-slide="next"
            aria-label="Next item"
          >
            <Icon
              size={16}
              id="ChevronRight"
              strokeWidth={3}
              class="text-black"
            />
          </Button>
        </div>
      </div>

      <SliderControllerJS rootId={id} />

      <ViewSendEvent
        event={{
          name: "view_item_list",
          params: {
            item_list_name: title,
            items: products.map((product) =>
              mapProductToAnalyticsItem({
                product,
                ...(useOffer(product.offers)),
              })
            ),
          },
        }}
      />
    </Container>
  );
}

export default ProductShelf;
