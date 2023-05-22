import type { HTML } from "deco-sites/std/components/types.ts";
import QuillText from "deco-sites/std/components/QuillText.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  description: string;
  image?: LiveImage;
  caption?: string;
  /** @default 100% */
  containerSize?: string;
  actionLabel?: string;
  actionHref?: string;
}

export default function Hero(props: Props) {
  const {
    description,
    title,
    actionHref,
    actionLabel,
    caption,
    image,
    containerSize = "100%",
  } = props;
  return (
    <div class="w-full">
      {image && <img src={image} alt={title} width="100%" height="auto" />}
      <div
        class={`w-full flex flex-col gap-6 items-center justify-center mt-[35px] px-5 text-[#212121] max-w-[${containerSize}] mx-auto`}
      >
        {caption && (
          <span class="uppercase text-[14px] text-center font-helvetica">
            {caption}
          </span>
        )}

        <h1 class="uppercase text-3xl text-center font-rolex">
          {title}
        </h1>

        <p class="text-[16px] text-center font-helvetica leading-[1.7] font-light max-w-[650px]">
          {description}
        </p>

        {actionHref && actionLabel
          ? (
            <a
              href={actionHref}
              class="text-xs uppercase text-white bg-[#147749] px-4 py-2 rounded-full"
            >
              {actionLabel}
            </a>
          )
          : null}
      </div>
    </div>
  );
}
