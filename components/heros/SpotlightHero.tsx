import Actionable from "./Actionable.tsx";
import { useSignal } from "@preact/signals";
import SmallFaderShelf from "./SmallFaderShelf.tsx";
import { Action, ImageWithAction } from "./types.ts";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import Button from "deco-sites/bergerson/components/ui/Button.tsx";

export interface Slide {
  /** @description image to be displayed before the texts */
  baseColor: string;
  title: string;
  description: string;
  action: Action;
  products: ImageWithAction[];
  detail: ImageWithAction;
}

export interface Props {
  slides: Slide[];
}

export default function Spotlight(props: Props) {
  const { slides } = props;
  const currentSlide = useSignal(0);

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
    <div class="flex flex-col relative relative">
      {/** desktop controllers */}
      <div class="lg:flex left-0 hidden w-min absolute justify-between z-20 h-full px-2 items-center">
        <Icon
          width={36}
          height={36}
          strokeWidth={2}
          id="ChevronLeft"
          class="cursor-pointer"
          onClick={() => goToPrevious()}
        />
      </div>

      <div class="lg:flex right-0 hidden w-min absolute justify-between z-20 h-full px-2 items-center">
        <Icon
          width={36}
          height={36}
          strokeWidth={2}
          id="ChevronRight"
          class="cursor-pointer"
          onClick={() => goToNext()}
        />
      </div>

      <ul class="grid grid-cols-1">
        {slides.map((slide, slideIndex) => {
          const isActive = slideIndex === currentSlide.value;
          const baseOpacityClass = "transition ease-in-out duration-1000";
          const opacityClass = isActive ? "opacity-100 z-10" : "opacity-0";
          const baseClass = "flex flex-col lg:flex-row col-start-1 row-start-1";
          const liClass = `${baseClass} ${baseOpacityClass} ${opacityClass}`;

          return (
            <li class={`${liClass} bg-[${slide.baseColor}]`}>
              {/** detail */}
              <div class="relative w-full h-full max-h-[460px] md:max-h-[1120px] flex flex-1">
                <Actionable action={slide.detail.action}>
                  <img
                    loading="lazy"
                    decoding="async"
                    src={slide.detail.image}
                    alt={slide.detail.action?.title ?? "Bergerson"}
                    class="h-full w-full max-h-[460px] md:max-h-[1120px] object-cover"
                  />
                </Actionable>

                {/** products */}
                <div class="block w-[200px] h-[200px] bg-white absolute z-30 md:(left-[100%] top-[50%]) left-[50%] -ml-[100px] top-[100%] -mt-[100px]">
                  {isActive && (
                    <SmallFaderShelf
                      key={slideIndex}
                      images={slide.products}
                    />
                  )}
                </div>
              </div>

              {/** texts */}
              <div class="flex flex-1 items-center justify-center pb-8 mt-8 relative z-30 pt-[100px] md:(mt-0 pt-0)">
                <div class="flex flex-col items-center justify-center max-w-[280px] gap-4">
                  <img
                    width="57"
                    height="29"
                    loading="lazy"
                    decoding="async"
                    alt="black star"
                    src="/black-star.png"
                    class="hidden md:block"
                  />

                  <h3 class="font-serif font-bold text-4xl lg:text-6xl text-center text-default">
                    {slide.title}
                  </h3>

                  {slide.description}

                  {/** mobile controllers */}
                  <div class="lg:hidden flex w-full absolute justify-between pt-[100px] top-12">
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

                  <div class="mx-[15px] border-y-1 border-black p-2.5">
                    <Button
                      as="a"
                      variant="quaternary"
                      href={slide.action.href}
                    >
                      {slide.action.title}
                    </Button>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
