import { useId } from "preact/hooks";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import Button from "deco-sites/fashion/components/ui/Button.tsx";
import { Slider } from "deco-sites/fashion/components/ui/Slider.tsx";
import Container from "deco-sites/fashion/components/ui/Container.tsx";
import SliderControllerJS from "deco-sites/fashion/islands/SliderJS.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  items: Array<{
    image: LiveImage;
    title: string;
    href: string;
  }>;
}

// deno-lint-ignore no-explicit-any
function renderItem(item: any) {
  return (
    <div class="w-[133px] h-[170px] sm:(w-[168px] h-[215px]) lg:(w-[208px] h-[266px]) relative overflow-hidden">
      <a href={item.href} class="group">
        <img
          src={item.image}
          alt={item.title}
          class="flex flex-1 w-full h-full object-cover transition group-hover:scale-110"
        />

        <div class="absolute top-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <p class="text-white md:text-[18px] font-normal font-montblanc text-center text-center w-3/4">
            {item.title}
          </p>
        </div>
      </a>
    </div>
  );
}

function Highlights(props: Props) {
  const { title, items } = props;
  const id = useId();

  return (
    <div class="bg-[#f2f2f2]">
      <Container
        id={id}
        class="py-20 px-0 sm:px-5"
      >
        <h1 class="font-semibold text-2xl md:text-[37px] font-montblanc text-center mb-10 px-5">
          {title}
        </h1>

        <div class="hidden md:flex flex-row justify-center gap-[20px]">
          {items.map(renderItem)}
        </div>

        <div class="md:hidden grid grid-cols-[48px_1fr_48px] grid-rows-[1fr_48px_1fr]">
          <Slider
            class="gap-6 col-span-full row-start-1 row-end-5 scrollbar-none overflow-x-scroll"
            snap="snap-center sm:snap-start block first:ml-6 sm:first:ml-0 last:mr-6 sm:last:mr-0"
          >
            {items.map(renderItem)}
          </Slider>

          <>
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
          </>

          <SliderControllerJS rootId={id} />
        </div>
      </Container>
    </div>
  );
}

export default Highlights;
