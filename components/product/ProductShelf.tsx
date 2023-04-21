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
import { useSignal } from "@preact/signals";

export interface Props {
  title: string[];
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

  if (title.length > 3) {
    throw new Error("Category limit is 3");
  }
  const onOff = useSignal(false);

  const changeTextColor = (addColor: string, removeColor: string, event: MouseEvent) => {
    if (event.target instanceof HTMLElement) {
      event?.target.classList.add(addColor)
      event?.target.classList.remove(removeColor)
    }
  }

  const handleClick = (event: MouseEvent) => {
    if (event.target instanceof HTMLElement) {
      if (onOff.value === false) {
        changeTextColor("text-black", "text-[#ccc]", event)
        onOff.value = !onOff.value;
      } else {
        changeTextColor("text-[#ccc]", "text-black", event)
        onOff.value = !onOff.value;
      }
    } 
  };
  
  return (
    <div
      id={id}
      class="grid grid-cols-[106px_1fr_106px] grid-rows-[48px_1fr_48px_1fr] py-[100px] px-0 sm:px-5"
    >
      <ul class="flex col-start-2 text-4xl font-serif font-heading-1 justify-center items-center gap-[30px] text-[#ccc]">
        {title.map((currentItem, index) => (
          title.length == index + 1
            ? (
              <li
                onClick={handleClick}
                class={`py-2.5 px-[15px] cursor-pointer text-[#ccc]`}
              >
                {currentItem}
              </li>
            )
            : (
              <>
                <li
                  onClick={handleClick}
                  class={`py-2.5 px-[15px] cursor-pointer text-[#ccc]`}
                >
                  {currentItem}
                </li>
                <img
                  class="w-6 h-[17px]"
                  src="https://www.bergersonjoias.com/arquivos/bergerson-star.png?v=637998171695470000"
                />
              </>
            )
        ))}
      </ul>

      <Slider
        class="gap-6 row-start-2 row-end-5"
        snap="snap-center sm:snap-start block first:ml-6 sm:first:ml-0 last:mr-6 sm:last:mr-0"
      >
        {products?.map((product) => (
          <div class="min-w-[270px] max-w-[270px] sm:min-w-[292px] sm:max-w-[292px]">
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>

      <>
        <div class="hidden relative sm:block z-10 col-start-1 row-start-3">
          <div class="absolute right-1/2">
            <Button variant="icon" data-slide="prev" aria-label="Previous item">
              <Icon size={30} id="ChevronLeft" strokeWidth={3} />
            </Button>
          </div>
        </div>
        <div class="hidden relative sm:block z-10 col-start-3 row-start-3">
          <div class="absolute left-1/2">
            <Button variant="icon" data-slide="next" aria-label="Next item">
              <Icon size={30} id="ChevronRight" strokeWidth={3} />
            </Button>
          </div>
        </div>
      </>

      <SliderControllerJS rootId={id} />

      <ViewSendEvent
        event={{
          name: "view_item_list",
          params: {
            items: products.map((product) =>
              mapProductToAnalyticsItem({
                product,
                ...(useOffer(product.offers)),
              })
            ),
          },
        }}
      />
    </div>
  );
}

export default ProductShelf;
