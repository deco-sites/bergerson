import Actionable from "./Actionable.tsx";
import { useSignal } from "@preact/signals";
import SmallFaderShelf from "./SmallFaderShelf.tsx";
import { Action, ImageWithAction } from "./types.ts";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import type { HTML } from "deco-sites/std/components/types.ts";
import QuillText from "deco-sites/std/components/QuillText.tsx";
import Button from "deco-sites/bergerson/components/ui/Button.tsx";

export interface Slide {
  /** @description image to be displayed before the texts */
  logo: ImageWithAction;
  detail: ImageWithAction;
  products: ImageWithAction[];
  action: Action;
  text: HTML;
  /** @default right */
  textPosition: "left" | "right";
}

export interface Props {
  title: string;
  slides: Slide[];
}

export default function WristwatchHero(props: Props) {
  const { title, slides } = props;
  const currentSlide = useSignal(0);
  const goTo = (n: number) => currentSlide.value = n;

  const goToNext = () => {
    const slideLenght = slides.length - 1;
    const nextSlide = currentSlide.value + 1;
    currentSlide.value = nextSlide > slideLenght ? 0 : nextSlide;
  };

  const goToPrevious = () => {
    const maxSlide = slides.length - 1;
    const nextSlide = currentSlide.value - 1;
    currentSlide.value = nextSlide < 0 ? maxSlide : nextSlide;
  };

  return (
    <div class="flex flex-col relative lg:px-28 lg:py-40 bg-[#fbf9f6] gap-12">
      <div class="hidden lg:flex flex-col gap-4 mx-[15px]">
        <h3 class="font-serif font-bold text-5xl">{title}</h3>

        {/** desktop controllers */}
        <div class="flex flex-row gap-2">
          {slides.map((_, slideIndex) => {
            const isActive = slideIndex === currentSlide.value;
            const activeBg = "bg-yellow-300";
            const inactiveBg = "bg-yellow-100 hover:bg-yellow-300";

            const bgClass = isActive ? activeBg : inactiveBg;
            const baseClass = "cursor-pointer w-[16px] h-[16px] rounded-full";

            return (
              <span
                onClick={() => goTo(slideIndex)}
                class={`${baseClass} ${bgClass}`}
              />
            );
          })}
        </div>
      </div>

      <ul class="grid grid-cols-1">
        {slides.map((slide, slideIndex) => {
          const isLeft = slide.textPosition === "left";
          const productLeftClass = "bottom-[-50px] left-[-100px]";
          const productRightClass = "bottom-[-50px] right-[-100px]";
          const productClass = isLeft ? productLeftClass : productRightClass;
          const textsOrderClass = isLeft ? "order-1" : "order-2";
          const detailsOrderClass = isLeft ? "order-2" : "order-1";
          const isActive = slideIndex === currentSlide.value;
          const opacityClass = isActive ? "opacity-100 z-10" : "opacity-0";

          return (
            <li
              class={`flex flex-col lg:flex-row lg:gap-24 col-start-1 row-start-1 transition ease-in-out duration-1000 ${opacityClass}`}
            >
              {/** detail */}
              <div
                class={`relative w-full lg:h-[600px] lg:w-[728px] lg:mx-[15px] lg:${detailsOrderClass}`}
              >
                <Actionable action={slide.detail.action}>
                  <img
                    src={slide.detail.image}
                    alt={slide.detail.action?.title || title}
                    class="h-[600px] w-full lg:w-[728px] object-cover"
                  />
                </Actionable>

                {/** products */}
                <div
                  class={`hidden lg:block w-[200px] h-[200px] bg-white absolute ${productClass}`}
                >
                  {isActive && (
                    <SmallFaderShelf
                      key={slideIndex}
                      images={slide.products}
                    />
                  )}
                </div>

                {/** mobile title */}
                <div class="block lg:hidden bg-black py-3.5">
                  <h3 class="uppercase font-serif font-bold text-lg text-center text-white">
                    {title}
                  </h3>
                </div>
              </div>

              {/** texts */}
              <div
                class={`lg:max-w-[740px] py-8 flex flex-col items-center justify-center lg:items-start lg:justify-start gap-8 relative lg:${textsOrderClass}`}
              >
                {/** mobile controllers */}
                <div class="lg:hidden flex w-full absolute justify-between px-2 top-12">
                  <Icon
                    width={36}
                    height={36}
                    strokeWidth={2}
                    id="ChevronLeft"
                    class="cursor-pointer"
                    onClick={() => goToPrevious()}
                  />
                  <Icon
                    width={36}
                    height={36}
                    strokeWidth={2}
                    id="ChevronRight"
                    class="cursor-pointer"
                    onClick={() => goToNext()}
                  />
                </div>

                <Actionable action={slide.logo.action}>
                  <img
                    alt={slide.logo.action?.title || title}
                    src={slide.logo.image}
                    class="mx-[15px] h-[115px] w-full lg:w-[200px] object-contain"
                  />
                </Actionable>

                <div class="lg:block hidden text-body font-sans font-medium">
                  <QuillText html={slide.text} />
                </div>

                <div class="mx-[15px]">
                  <Button as="a" href={slide.action.href} variant="primary">
                    {slide.action.title}
                  </Button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}