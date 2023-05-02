import { useId } from "preact/hooks";
import type { LoaderReturnType } from "$live/types.ts";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import type { Product } from "deco-sites/std/commerce/types.ts";
import Button from "deco-sites/fashion/components/ui/Button.tsx";
import { Slider } from "deco-sites/fashion/components/ui/Slider.tsx";
import Container from "deco-sites/fashion/components/ui/Container.tsx";
import SliderControllerJS from "deco-sites/fashion/islands/SliderJS.tsx";
import ProductCard from "deco-sites/fashion/components/product/ProductCard.tsx";

export interface Props {
  title?: string;
  collection: LoaderReturnType<Product[] | null>;
  flat?: boolean;
}

function ProductShelf(props: Props) {
  const id = useId();
  const { title, collection, flat } = props;
  const products = collection;
  const padding = flat ? "px-5" : "py-20 px-0 sm:px-5";

  return (
    <Container id={id} class={padding}>
      {title && (
        <div class="mb-20">
          <div class="font-serif flex flex-col gap-2 md:gap-8 flex-1 w-full text-2xl font-semibold md:(flex-row text-4xl) items-center justify-center">
            <div class="flex flex-row gap-8 items-center">
              <span>{title}</span>
            </div>
          </div>
        </div>
      )}

      <div class="grid grid-cols-[38px_1fr_38px] grid-rows-[1fr_38px_1fr] md:grid-rows-[1fr_38px_1fr]">
        <Slider
          class="gap-6 col-span-full row-start-1 row-end-4 scrollbar-none overflow-x-scroll"
          snap="snap-center sm:snap-start block first:ml-6 sm:first:ml-0 last:mr-6 sm:last:mr-0"
        >
          {products?.map((product) => (
            <div class="min-w-[270px] max-w-[270px] sm:min-w-[292px] sm:max-w-[292px]">
              <ProductCard product={product} preload={false} />
            </div>
          ))}
        </Slider>

        {/** CONTROLS MOBILE */}
        <div class="block relative z-10 col-start-1 row-start-2">
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

        <div class="block relative z-10 col-start-3 row-start-2">
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
      </div>
    </Container>
  );
}

export default ProductShelf;
