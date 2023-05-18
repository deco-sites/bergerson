import ProductCard from "deco-sites/fashion/components/product/ProductCard.tsx";
import Container from "deco-sites/fashion/components/ui/Container.tsx";
import { Slider } from "deco-sites/fashion/components/ui/Slider.tsx";
import SliderControllerJS from "deco-sites/fashion/islands/SliderJS.tsx";
import Button from "deco-sites/fashion/components/ui/Button.tsx";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import { useEffect, useId, useRef } from "preact/hooks";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";
import ViewSendEvent from "deco-sites/fashion/islands/ViewSendEvent.tsx";
import { mapProductToAnalyticsItem } from "deco-sites/std/commerce/utils/productToAnalyticsItem.ts";
import { useOffer } from "deco-sites/fashion/sdk/useOffer.ts";
import { useSignal } from "@preact/signals";

export interface Props {
  title: string;
  products: LoaderReturnType<Product[] | null>;
  itemsPerPage?: number;
}

function ProductShelf({
  title,
  products,
}: Props) {
  const id = useId() + title;

  if (!products || products.length === 0) {
    return null;
  }

  // deno-lint-ignore no-explicit-any
  const sliderRef = useRef<any>(null);
  const sliderWidth = useSignal(292);
  const largeCardWidth = useSignal(292);

  useEffect(() => {
    const width = sliderRef?.current?.base?.offsetWidth ?? 0;

    if (width) {
      const safeWidth = width - 60;
      const cardSize = safeWidth / 3;
      sliderWidth.value = width - 40;
      largeCardWidth.value = cardSize;
    }
  }, [sliderRef]);

  return (
    <Container
      id={id}
      class="sm:max-w-[1170px] grid grid-cols-[38px_1fr_38px] grid-rows-[64px_1fr_38px_1fr] pt-12 pb-20 px-5"
    >
      <div class="row-start-1 col-span-full flex flex-row w-full">
        <div class="flex flex-1 w-full text-xl md:text-[22px] font-normal font-montblanc">
          {title}
        </div>

        {/** CONTROLS DESKTOP */}
        <div class="hidden md:flex flex-row gap-4">
          <div class="bg-interactive-inverse border-black border h-10 w-10">
            <Button
              class="h-10 w-10 pr-1 pb-0.5"
              variant="icon"
              data-slide="prev"
              aria-label="Previous item"
            >
              <img
                src="/montblanc-arrow.webp"
                alt="Item anterior"
                width={20}
                height={9.29}
              />
            </Button>
          </div>
          <div class="bg-interactive-inverse border-black border h-10 w-10">
            <Button
              class="h-10 w-10 pr-1 pb-0.5"
              variant="icon"
              data-slide="next"
              aria-label="Next item"
            >
              <img
                class="rotate-180"
                src="/montblanc-arrow.webp"
                alt="Item anterior"
                width={20}
                height={9.29}
              />
            </Button>
          </div>
        </div>
      </div>

      <Slider
        ref={sliderRef}
        class="gap-6 col-span-full row-start-2 row-end-5 scrollbar-none overflow-x-scroll"
        snap="snap-center sm:snap-start flex flex-1 h-full first:ml-6 sm:first:ml-0 last:mr-6 sm:last:mr-0"
      >
        {products?.map((product) => {
          const smallWidth = sliderWidth.value + "px";
          const largeWidth = largeCardWidth.value + "px";

          return (
            <div
              class={`min-w-[${smallWidth}] max-w-[${smallWidth}] sm:(min-w-[${largeWidth}] max-w-[${largeWidth}]) h-full`}
            >
              <ProductCard product={product} preload={false} />
            </div>
          );
        })}
      </Slider>

      {/** CONTROLS MOBILE */}
      <div class="block relative md:hidden z-10 col-start-1 row-start-3">
        <div class="absolute bg-interactive-inverse border-black border left-5">
          <Button
            class="h-10 w-10"
            variant="icon"
            data-slide="prev"
            aria-label="Item anterior"
          >
            <img
              src="/montblanc-arrow.webp"
              alt="Item anterior"
              width={20}
              height={9.29}
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
            aria-label="Próximo item"
          >
            <img
              class="rotate-180"
              src="/montblanc-arrow.webp"
              alt="Próximo item"
              width={20}
              height={9.29}
            />
          </Button>
        </div>
      </div>

      <SliderControllerJS infinite interval={7000} rootId={id} />

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
