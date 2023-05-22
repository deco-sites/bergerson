import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Container from "../ui/Container.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

export interface Banner {
  /** @title Desktop source */
  src: LiveImage;
  /** @title Mobile source */
  mobileSrc?: LiveImage;
  alt: string;
  label: string;
  /** @description Required only for 3 columns variation */
  description?: string;
  href: string;
}

export interface Props {
  images?: Banner[];
  /** @default 3-columns */
  variation: "3-columns" | "2-columns";
}

export default function Gallery(
  { images = [], variation = "3-columns" }: Props,
) {
  return (
    <Container class="md:px-0 px-[20px] mt-[30px]">
      <ul
        class={`grid ${
          variation === "3-columns"
            ? "lg:grid-cols-[1fr_1fr_1fr]"
            : "gap-x-1 gap-y-[20px]"
        } grid-cols-[1fr_1fr]`}
      >
        {images.map((image) => (
          <li
            class={`${
              variation === "3-columns"
                ? "font-helvetica text-[12px] leading-[14px] tracking-[1.2px] text-center"
                : "font-rolex xl:text-[14px] lg:text-[12px] text-[10px] leading-[1.3] tracking-[0.1em] text-left"
            } text-[#212121] font-bold`}
          >
            <a href={image.href}>
              <Picture
                preload
                class=""
              >
                {image.mobileSrc
                  ? (
                    <Source
                      src={image.mobileSrc}
                      width={400}
                      media="(max-width: 990px)"
                    />
                  )
                  : null}
                <Source
                  width={600}
                  src={image.src}
                  media={image.mobileSrc ? "(min-width: 990px)" : undefined}
                />
                <img
                  width="100%"
                  height="auto"
                  class="w-full h-auto object-cover"
                  src={image.src}
                  alt={image.alt ?? "Bergerson"}
                />
              </Picture>
              <p
                class={`${
                  variation === "3-columns" ? "mb-[2px]" : "mt-[10px]"
                }`}
              >
                {image.label}
              </p>
              {variation === "3-columns" ? <p>{image.description}</p> : null}
            </a>
          </li>
        ))}
      </ul>
    </Container>
  );
}
