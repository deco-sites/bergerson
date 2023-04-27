import { useId } from "preact/hooks";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import Button from "deco-sites/fashion/components/ui/Button.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import SliderControllerJS from "deco-sites/fashion/islands/SliderJS.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

import {
  Slider,
  SliderDots,
} from "deco-sites/fashion/components/ui/Slider.tsx";

export interface Banner {
  /** @description desktop otimized image */
  desktop: LiveImage;
  /** @description mobile otimized image */
  mobile: LiveImage;
  /** @description Image's alt text */
  alt: string;
  /** @description when user clicks on the image, go to this link */
  href?: string;
}

export interface Props {
  images?: Banner[];
  /**
   * @description Check this option when this banner is the biggest image on the screen for image optimizations
   */
  preload?: boolean;
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

function BannerItem({ image, lcp }: { image: Banner; lcp?: boolean }) {
  const {
    alt,
    mobile,
    desktop,
    href,
  } = image;

  return (
    <div class="relative min-w-[100vw] h-full overflow-y-hidden">
      <a href={href ?? "#"}>
        <Picture class="w-full" preload={lcp}>
          <Source
            media="(max-width: 767px)"
            fetchPriority={lcp ? "high" : "auto"}
            src={mobile}
            width={833}
            height={556}
          />
          <Source
            media="(min-width: 768px)"
            fetchPriority={lcp ? "high" : "auto"}
            src={desktop}
            width={2667}
            height={903}
          />
          <img
            class="object-cover w-full"
            loading={lcp ? "eager" : "lazy"}
            src={desktop}
            alt={alt}
          />
        </Picture>
      </a>
    </div>
  );
}

function Controls() {
  return (
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
  );
}

function ProgressiveDots({ images, interval = 0 }: Props) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @property --dot-progress {
            syntax: '<percentage>';
            inherits: false;
            initial-value: 0%;
          }`,
        }}
      >
      </style>
      <SliderDots class="hidden lg:flex col-span-full gap-4 z-10 row-start-4 scrollbar-none">
        {images?.map((_) => (
          <div class="py-6">
            <div class="w-[13px] h-[13px] rounded-full bg-white opacity-50 group-disabled:opacity-100" />
          </div>
        ))}
      </SliderDots>
    </>
  );
}

function BannerCarousel({ images, preload, interval }: Props) {
  const id = useId();

  return (
    <div
      id={id}
      class="grid grid-cols-[48px_1fr_48px] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_48px]"
    >
      <Slider class="col-span-full row-span-full scrollbar-none gap-6">
        {images?.map((image, index) => (
          <BannerItem image={image} lcp={index === 0 && preload} />
        ))}
      </Slider>

      <Controls />
      <ProgressiveDots images={images} interval={interval} />
      <SliderControllerJS rootId={id} interval={interval && interval * 1e3} />
    </div>
  );
}

export default BannerCarousel;
