import Button from "deco-sites/fashion/components/ui/Button.tsx";
import Container from "deco-sites/fashion/components/ui/Container.tsx";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import {
  Slider,
  SliderDots,
} from "deco-sites/fashion/components/ui/Slider.tsx";
import SliderControllerJS from "deco-sites/fashion/islands/SliderJS.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { useEffect, useRef } from "preact/hooks";
import { useSignal } from "@preact/signals";
import { useId } from "preact/hooks";

export interface Props {
  title: string;
  items: Array<{
    image: LiveImage;
    title: string;
    href: string;
  }>;
}

function ImageSlider(props: Props) {
  const { title, items } = props;
  const id = useId();
  const sliderRef = useRef<HTMLUListElement>(null);
  const cardWidth = useSignal(411);

  useEffect(() => {
    const width = sliderRef.current?.offsetWidth ?? 0;

    if (width) {
      const safeWidth = width;
      cardWidth.value = safeWidth;
    }
  }, [sliderRef.current]);

  return (
    <Container class="md:py-[77px] py-[55px] xl:px-0 px-[20px]">
      <h2 class="text-left text-[14px] font-helvetica mb-4">
        {title}
      </h2>

      <div
        class="grid grid-cols-[48px_1fr_48px] grid-rows-[1fr_48px_1fr]"
        id={id}
      >
        <Slider
          ref={sliderRef}
          class="gap-6 col-span-full row-start-1 row-end-5 scrollbar-none overflow-x-scroll"
          snap="md:(snap-center last:snap-end) snap-start block"
        >
          {items.map((item) => (
            <div
              class={`w-full h-auto relative overflow-hidden md:w-[${
                (cardWidth.value - 48) / 3
              }px] w-[${(cardWidth.value - 24) / 2}px]`}
            >
              <a href={item.href} class="block">
                <img
                  src={item.image}
                  alt={item.title}
                  width="367"
                  height="auto"
                  class="w-full h-full object-cover"
                />
                <p class="text-black text-[12px] font-bold uppercase my-[10px]">
                  {item.title}
                </p>
              </a>
            </div>
          ))}
        </Slider>

        <div class="flex items-center justify-start z-10 col-start-1 row-start-2">
          <Button
            class="h-12 w-12"
            variant="icon"
            data-slide="prev"
            aria-label="Previous item"
          >
            <Icon
              class="text-default-inverse"
              size={20}
              id="ChevronLeft"
              strokeWidth={3}
            />
          </Button>
        </div>
        <div class="flex items-center justify-end z-10 col-start-3 row-start-2">
          <Button
            class="h-12 w-12"
            variant="icon"
            data-slide="next"
            aria-label="Next item"
          >
            <Icon
              class="text-default-inverse"
              size={20}
              id="ChevronRight"
              strokeWidth={3}
            />
          </Button>
        </div>

        <SliderDots
          buttonClass="text-[0px] rounded-[25px] disabled:bg-[#19734d] bg-[#d4d4d4] overflow-hidden"
          class="flex col-span-full gap-1 z-10 row-start-5 scrollbar-none pb-7 justify-center items-center"
        >
          {items?.map((_, index) => (
            <p
              class={`${
                index === 0 || index === 3 ? "md:block" : "md:hidden"
              } ${
                index === 0 || index === 2 || index === 4 ? "block" : "hidden"
              } h-1 w-[70px]`}
            >
              {index + 1}
            </p>
          ))}
        </SliderDots>

        <SliderControllerJS rootId={id} />
      </div>
    </Container>
  );
}

export default ImageSlider;
