import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Items {
  alt: string;
  link: string;
  image: LiveImage;
}

export interface Props {
  items: Items[];
}

function FloatLinks(props: Props) {
  const { items } = props;

  return (
    <div class="w-[45px] fixed bottom-2 right-2 z-40 flex flex-col gap-2">
      {items.map((links) => {
        return (
          <div>
            <a href={links.link} target="_blank">
              <button class="bg-white text-white p-2 rounded-full shadow-lg">
                <img src={links.image} width={29} height={29} alt={links.alt} />
              </button>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default FloatLinks;
