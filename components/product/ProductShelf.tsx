import { useId } from "preact/hooks";
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
  firstCollectionTitle?: string;
  secondCollectionTitle?: string;
  thirdCollectionTitle?: string;
  firstProductCollection?: LoaderReturnType<Product[] | null>;
  secondProductCollection?: LoaderReturnType<Product[] | null>;
  thirdProductCollection?: LoaderReturnType<Product[] | null>;
}

function ProductShelf(props: Props) {
  const {
    firstCollectionTitle,
    secondCollectionTitle,
    thirdCollectionTitle,
    firstProductCollection,
    secondProductCollection,
    thirdProductCollection,
  } = props;

  const id = useId() + firstProductCollection?.length +
    secondProductCollection?.length + thirdProductCollection?.length;

  const activeCollection = useSignal(0);
  const changeCollection = (i: number) => () => (activeCollection.value = i);

  const title = [
    firstCollectionTitle,
    secondCollectionTitle,
    thirdCollectionTitle,
  ].filter(Boolean);

  const collections = [
    firstProductCollection,
    secondProductCollection,
    thirdProductCollection,
  ].filter(Boolean);

  const products = collections[activeCollection.value];

  return (
    <Container
      id={id}
      class="grid grid-cols-[38px_1fr_38px] grid-rows-[1fr_1fr_38px_1fr] md:grid-rows-[96px_1fr_38px_1fr] py-20 px-0 sm:px-5"
    >
      <div class="row-start-1 col-span-full flex flex-row w-full px-5">
        <div class="font-serif flex flex-col gap-2 md:gap-8 flex-1 w-full text-2xl font-semibold md:(flex-row text-4xl) items-center justify-center">
          {title.map((t, i) => {
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
        class="gap-6 col-span-full row-start-2 row-end-5 scrollbar-none overflow-x-scroll"
        snap="snap-center sm:snap-start block first:ml-6 sm:first:ml-0 last:mr-6 sm:last:mr-0"
      >
        {products?.map((product) => (
          <div class="min-w-[270px] max-w-[270px] sm:min-w-[292px] sm:max-w-[292px]">
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>

      {/** CONTROLS MOBILE */}
      <div class="block relative z-10 col-start-1 row-start-3">
        <div class="absolute left-5">
          <Button
            variant="icon"
            data-slide="prev"
            aria-label="Previous item"
          >
            <Icon
              size={32}
              id="ChevronLeft"
              strokeWidth={3}
              class="text-black"
            />
          </Button>
        </div>
      </div>

      <div class="block relative z-10 col-start-3 row-start-3">
        <div class="absolute right-5">
          <Button
            variant="icon"
            data-slide="next"
            aria-label="Next item"
          >
            <Icon
              size={32}
              id="ChevronRight"
              strokeWidth={3}
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
