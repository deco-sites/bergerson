import type { Image } from "deco-sites/std/components/types.ts";

export type PositionType =
  | "normal"
  | "right"
  | "left"
  | "below"
  | "right-equal"
  | "left-equal";
export type ContainerType = "full" | "large" | "small" | "natural";
export interface Props {
  image: Image;
  imageAlt: string;
  imageContain?: boolean;
  /** @title Title */
  label?: string;
  text?: string;
  /** @default 100% */
  textWidth?: string;
  /** @description It can be hexdecimal, rgb, rgba or color name */
  colors: {
    /** @default transparent */
    backgroundColor?: string;
    /** @default #333 */
    textColor?: string;
  };
  /** @default normal */
  textPosition?: PositionType;
  /** @default full */
  container?: ContainerType;
  containerSpacing?: boolean;
  actionLabel?: string;
  actionHref?: string;
}

const POSITION_CLASSES: Record<PositionType, string> = {
  "normal": "",
  "right": "flex-row items-center",
  "left": "flex-row-reverse	items-center",
  "right-equal": "flex-row items-center",
  "left-equal": "flex-row-reverse	items-center",
  "below": "flex-col",
} as const;

const CONTENT_CLASSES: Record<PositionType, {
  imageSize: string;
  textSize: string;
}> = {
  "normal": {
    imageSize: "w-full",
    textSize: "w-full",
  },
  "right": {
    imageSize: "w-[45%]",
    textSize:
      "w-[55%] text-left md:px-[60px] flex flex-col gap-[10px] justify-center",
  },
  "left": {
    imageSize: "w-[45%]",
    textSize:
      "w-[55%] text-left md:px-[60px] flex flex-col gap-[10px] justify-center",
  },
  "right-equal": {
    imageSize: "w-[50%]",
    textSize:
      "w-[50%] text-left md:px-[60px] self-stretch flex flex-col items-center justify-center gap-[10px]",
  },
  "left-equal": {
    imageSize: "w-[50%]",
    textSize:
      "w-[50%] text-left md:px-[60px] self-stretch flex flex-col items-center justify-center gap-[10px]",
  },
  "below": {
    imageSize: "w-auto",
    textSize:
      "w-full flex flex-col gap-[20px] justify-center text-center children:(mx-auto max-w-[650px]) mb-[9px] mt-[24px] md:(mb-[17px] mt-[32px])",
  },
} as const;

const IMAGE_CONTAIN: Record<PositionType, string> = {
  "normal": "",
  "right": "md:pl-[5vw]",
  "left": "md:pr-[5vw]",
  "below": "",
  "right-equal": "md:pl-[5vw]",
  "left-equal": "md:pr-[5vw]",
} as const;

const CONTAINER_CLASSES: Record<ContainerType, string> = {
  "full": "w-full",
  "large": "w-full px-[15px] max-w-[1140px] mx-auto",
  "small": "w-full px-[5vw] max-w-[650px] mx-auto",
  "natural": "w-full px-[5vw]",
} as const;

export default function InfoCard({
  image,
  imageAlt,
  imageContain = false,
  text,
  label = "",
  colors: {
    backgroundColor = "transparent",
    textColor = "#333",
  },
  textPosition = "normal",
  container = "full",
  textWidth = "100%",
  containerSpacing = true,
  actionHref,
  actionLabel,
}: Props) {
  const bgColorClass = `bg-[${backgroundColor}] text-[${textColor}]`;
  const posClass = POSITION_CLASSES[textPosition];
  const containerClass = CONTAINER_CLASSES[container];

  const { textSize, imageSize } = CONTENT_CLASSES[textPosition];

  return (
    <article
      class={`flex ${
        containerSpacing ? "mt-[20px] md:mt-[70px]" : ""
      } ${posClass} ${containerClass}`}
    >
      <img
        src={image}
        alt={imageAlt}
        class={`${imageSize} ${
          imageContain ? "" : IMAGE_CONTAIN[textPosition]
        }`}
        width="auto"
        height="auto"
      />
      <div class={`${textSize} ${bgColorClass}`}>
        <h2
          class={`max-w-[${textWidth}] mx-auto font-rolex text-[25px] md:text-[calc(1.525rem+0.125vw)] leading-[1.1] tracking-[4px] font-medium w-full`}
        >
          {label}
        </h2>
        <p
          class={`max-w-[${textWidth}] mx-auto font-helvetica font-light leading-[1.7] text-[16px]`}
        >
          {text}
        </p>
        {actionHref && actionLabel
          ? (
            <a
              href={actionHref}
              class="mt-4 text-xs text-white bg-[#147749] px-4 py-2 rounded-full"
            >
              {actionLabel}
            </a>
          )
          : null}
      </div>
    </article>
  );
}
