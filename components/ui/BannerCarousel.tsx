import { useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import Button from "deco-sites/fashion/components/ui/Button.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

// TIMER
let PRODUCT_TIMER: number;

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
    <div class="relative min-w-screen overflow-y-hidden">
      <a href={href ?? "#"}>
        <Picture class="w-full" preload={lcp}>
          <Source
            media="(max-width: 767px)"
            fetchPriority={lcp ? "high" : "auto"}
            src={mobile}
            width={450}
            height={970.58}
          />
          <Source
            media="(min-width: 768px)"
            fetchPriority={lcp ? "high" : "auto"}
            src={desktop}
            width={1440}
            height={750}
          />
          <img
            class="object-cover w-full h-full"
            loading={lcp ? "eager" : "lazy"}
            src={desktop}
            alt={alt}
          />
        </Picture>
      </a>
    </div>
  );
}

function BannerCarousel({ images = [], preload, interval = 1 }: Props) {
  const currentImage = useSignal(0);

  useEffect(() => {
    onChangeImages();
    return () => clearInterval(PRODUCT_TIMER);
  }, []);

  const onChangeImages = () => {
    if (PRODUCT_TIMER) clearInterval(PRODUCT_TIMER);
    PRODUCT_TIMER = setInterval(changeImage, interval * 1000);
  };

  const changeImage = () => {
    const imagesLength = images.length - 1;

    if (currentImage.value >= imagesLength) {
      currentImage.value = 0;
      return;
    }

    currentImage.value += 1;
    return;
  };

  const goToNext = () => {
    const imagesLength = images.length - 1;
    const nextImage = currentImage.value + 1;
    currentImage.value = nextImage > imagesLength ? 0 : nextImage;
    onChangeImages();
  };

  const goToPrevious = () => {
    const maxImage = images.length - 1;
    const nextImage = currentImage.value - 1;
    currentImage.value = nextImage < 0 ? maxImage : nextImage;
    onChangeImages();
  };

  return (
    <div class="relative">
      <div class="grid grid-cols-1">
        {images?.map((image, index) => {
          const isActive = index === currentImage.value;
          const opacityClass = isActive ? "opacity-100 z-10" : "opacity-0";

          return (
            <div
              class={`col-start-1 row-start-1 transition ease-in-out duration-1000 ${opacityClass}`}
            >
              <BannerItem image={image} lcp={index === 0 && preload} />
            </div>
          );
        })}
      </div>

      <div class="flex items-center justify-center z-10 absolute top-0 left-0 h-full">
        <Button
          class="h-12 w-12"
          variant="icon"
          data-slide="prev"
          onClick={goToPrevious}
          aria-label="Previous item"
        >
          <Icon
            size={24}
            strokeWidth={3}
            id="ChevronLeft"
            class="text-black"
          />
        </Button>
      </div>

      <div class="flex items-center justify-center z-10 absolute top-0 right-0 h-full">
        <Button
          class="h-12 w-12"
          variant="icon"
          data-slide="next"
          onClick={goToNext}
          aria-label="Next item"
        >
          <Icon
            size={24}
            strokeWidth={3}
            id="ChevronRight"
            class="text-black"
          />
        </Button>
      </div>
    </div>
  );
}

export default BannerCarousel;
