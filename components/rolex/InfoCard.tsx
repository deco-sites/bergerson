import type { HTML } from "deco-sites/std/components/types.ts";
import QuillText from "deco-sites/std/components/QuillText.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  description: HTML;
  image?: LiveImage;
  caption?: string;
  action?: { label: string; href: string };
}

export default function InfoCard(props: Props) {
  const { description, title, action, caption, image } = props;
  return (
    <div class="w-full flex items-center justify-center py-20 px-5">
      <div class="w-full sm:max-w-[660px] flex flex-col gap-6 items-center justify-center">
        {image && <img src={image} alt={title} />}

        {caption && (
          <span class="uppercase text-sm text-center">
            {caption}
          </span>
        )}

        <h1 class="uppercase text-3xl text-center">
          {title}
        </h1>

        <div class="text-gray-600 text-center">
          <QuillText html={description} />
        </div>

        {action && (
          <a
            href={action.href}
            class="text-xs uppercase text-white bg-[#147749] px-4 py-2 rounded-full"
          >
            {action.label}
          </a>
        )}
      </div>
    </div>
  );
}