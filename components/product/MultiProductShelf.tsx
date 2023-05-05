import { useEffect, useId, useRef } from "preact/hooks";
import { useSignal } from "@preact/signals";
import type { LoaderReturnType } from "$live/types.ts";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import type { Product } from "deco-sites/std/commerce/types.ts";
import Button from "deco-sites/fashion/components/ui/Button.tsx";
import { Slider } from "deco-sites/fashion/components/ui/Slider.tsx";
import Container from "deco-sites/fashion/components/ui/Container.tsx";
import SliderControllerJS from "deco-sites/fashion/islands/SliderJS.tsx";
import ProductCard from "deco-sites/fashion/components/product/ProductCard.tsx";

export interface Props {
  titles: string[];
  collection: LoaderReturnType<Product[][] | null>;
}

function ProductShelf(props: Props) {
  const { titles, collection } = props;

  // deno-lint-ignore no-explicit-any
  const sliderRef = useRef<any>(null);
  const sliderWidth = useSignal(292);
  const largeCardWidth = useSignal(292);

  const id = useId() + titles.length;
  const activeCollection = useSignal(0);
  const changeCollection = (i: number) => () => (activeCollection.value = i);
  const products = collection ? collection[activeCollection.value] : [];

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
      class="grid grid-cols-[38px_1fr_38px] grid-rows-[1fr_1fr_38px_1fr] md:grid-rows-[182px_1fr_38px_1fr] py-20 px-0 sm:px-5"
    >
      <div class="row-start-1 col-span-full flex flex-row w-full px-5">
        <div class="font-serif flex flex-col gap-2 md:gap-8 flex-1 w-full text-2xl font-semibold md:(flex-row text-4xl) items-center md:items-start justify-center">
          {titles.map((t, i) => {
            const isFirst = i === 0;
            const isActive = i === activeCollection.value;
            const titleClass = isActive ? "" : "opacity-50";

            return (
              <div
                onClick={changeCollection(i)}
                class="flex flex-row gap-8 cursor-pointer items-center"
              >
                {!isFirst && (
                  <img
                    width={24}
                    height={12.21}
                    alt="Black Star"
                    src="/black-star.png"
                    class="hidden md:block opacity-50 w-[24px] h-[12.21px]"
                  />
                )}

                <span class={titleClass}>
                  {t}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <Slider
        ref={sliderRef}
        class="gap-6 col-start-2 col-end-2 row-start-2 row-end-5 scrollbar-none overflow-x-scroll px-5"
        snap="snap-center sm:snap-start flex flex-1 h-full first:ml-[30px] sm:first:ml-0 last:mr-[30px] sm:last:mr-0"
      >
        {products?.map((product, index) => {
          const smallWidth = sliderWidth.value + "px";
          const largeWidth = largeCardWidth.value + "px";

          return (
            <div
              key={`${activeCollection.value}-${index}`}
              class={`min-w-[${smallWidth}] max-w-[${smallWidth}] sm:(min-w-[${largeWidth}] max-w-[${largeWidth}]) h-full animate-fade-in`}
            >
              <ProductCard
                preload={false}
                product={product}
                largeImage={true}
              />
            </div>
          );
        })}
      </Slider>

      {/** CONTROLS MOBILE */}
      <div class="block relative z-10 col-start-1 row-start-3">
        <div class="absolute left-0">
          <Button
            variant="icon"
            data-slide="prev"
            aria-label="Previous item"
          >
            <Icon
              size={32}
              id="ChevronLeft"
              strokeWidth={2}
              class="text-black"
            />
          </Button>
        </div>
      </div>

      <div class="block relative z-10 col-start-3 row-start-3">
        <div class="absolute right-0">
          <Button
            variant="icon"
            data-slide="next"
            aria-label="Next item"
          >
            <Icon
              size={32}
              id="ChevronRight"
              strokeWidth={2}
              class="text-black"
            />
          </Button>
        </div>
      </div>

      <SliderControllerJS rootId={id} />
    </Container>
  );
}

export default ProductShelf;
