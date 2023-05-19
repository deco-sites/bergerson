import type { Image } from "deco-sites/std/components/types.ts";

type PositionType = "normal" | "right" | "left" | "below";
type ContainerType = "full" | "large" | "natural";
export interface Props {
  image: Image;
  imageAlt: string;
  imageContain?: boolean;
  /** @title Title */
  label?: string;
  text?: string;
  /** @description It can be hexdecimal, rgb, rgba or color name */
  colors: {
    backgroundColor?: string;
    textColor?: string;
  };
  /** @default normal */
  textPosition?: PositionType;
  /** @default full */
  container?: "full" | "large" | "natural";
}

const POSITION_CLASSES: Record<PositionType, string> = {
  "normal": "",
  "right": "flex-row",
  "left": "flex-row-reverse	",
  "below": "flex-col",
} as const;

const SIZE_CLASSES: Record<PositionType, {
  imageSize: string;
  textSize: string;
}> = {
  "normal": {
    imageSize: "w-full",
    textSize: "",
  },
  "right": {
    imageSize: "w-[45%]",
    textSize: "w-[55%]",
  },
  "left": {
    imageSize: "w-[45%]",
    textSize: "w-[55%]",
  },
  "below": {
    imageSize: "w-auto",
    textSize: "w-full",
  },
} as const;

const IMAGE_CONTAIN: Record<Partial<PositionType>, string> = {
  "normal": "",
  "right": "md:ml-[5vw]",
  "left": "md:mr-[5vw]",
  "below": "",
} as const;

const CONTAINER_CLASSES: Record<ContainerType, string> = {
  "full": "w-full",
  "large": "w-full px-[5vw]",
  "natural": "px-[5vw]",
} as const;

export function InfoCard({
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
}: Props) {
  const bgColorClass = `bg-[${backgroundColor}] text-[${textColor}]`;
  const posClass = POSITION_CLASSES[textPosition];
  const containerClass = CONTAINER_CLASSES[container];

  const { textSize, imageSize } = SIZE_CLASSES[textPosition];

  return (
    <article
      class={`flex ${bgColorClass} ${posClass} ${containerClass}`}
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
      <div class={`${textSize}`}>
        <div class="max-w-[650px] text-center">
          <h2 class="font-rolex text-[25px] md:text-[calc(1.525rem+.625vw)] tracking-[4px] font-medium mb-[20px]">
            {label}
          </h2>
          <p class="font-helvetica font-light leading-[1.7] text-[16px]">
            {text}
          </p>
        </div>
      </div>
    </article>
  );
}
