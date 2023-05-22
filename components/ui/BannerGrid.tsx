import Container from "deco-sites/fashion/components/ui/Container.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Banner {
  srcMobile: LiveImage;
  srcDesktop?: LiveImage;
  /**
   * @description Image alt text
   */
  title?: string;
  /**
   * @description When you click you go to
   */
  href: string;
}

export interface Props {
  title?: string;
  /**
   * @description Default is 2 for mobile and all for desktop
   */
  itemsPerLine: {
    mobile?: number;
    desktop?: number;
  };
  /**
   * @description Item's border radius in px
   */
  borderRadius: {
    mobile?: number;
    desktop?: number;
  };
  banners: Banner[];
}

export default function BannnerGrid({
  title,
  itemsPerLine,
  borderRadius,
  banners = [],
}: Props) {
  return (
    <Container class="override:(max-w-[1140px] mt-4 px-[20px] lg:px-0)">
      <section class="w-full px-4 md:px-0 mx-auto">
        {title &&
          (
            <div class="py-4 flex items-center mt-6">
              <h2 class={"text-lg leading-5 font-semibold"}>
                {title}
              </h2>
            </div>
          )}
        <div
          class={`grid gap-x-4 gap-y-[33px] md:gap-6 grid-cols-${
            itemsPerLine && itemsPerLine.mobile ? itemsPerLine.mobile : "2"
          } md:grid-cols-${
            itemsPerLine && itemsPerLine.desktop
              ? itemsPerLine.desktop
              : banners.length
          }`}
        >
          {banners.map(({ href, srcMobile, srcDesktop, title }) => (
            <a
              href={href}
              class={`group overflow-hidden ${
                borderRadius?.mobile && `rounded-[${borderRadius.mobile}px]`
              } ${
                borderRadius?.desktop
                  ? `sm:rounded-[${borderRadius.desktop}px]`
                  : `sm:rounded-none`
              }`}
            >
              <Picture
                preload
                class="col-start-1 col-span-1 row-start-1 row-span-1"
              >
                <Source
                  width={360}
                  src={srcMobile}
                  media="(max-width: 767px)"
                />
                <Source
                  width={1440}
                  src={srcDesktop ? srcDesktop : srcMobile}
                  media="(min-width: 767px)"
                />
                <img
                  class="w-full"
                  src={srcDesktop ? srcDesktop : srcMobile}
                  alt={title}
                />
              </Picture>

              {title && (
                <span class="transition block mt-2 uppercase text-sm text-[#1b1b1b] group-hover:text-black">
                  {title}
                </span>
              )}
            </a>
          ))}
        </div>
      </section>
    </Container>
  );
}
