import Text from "deco-sites/fashion/components/ui/Text.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { headerHeightDesktop } from "./constants.ts";

export interface INavItem {
  label: string;
  href: string;
  children?: INavItem[];
  image?: { src?: LiveImage; alt?: string };
}

function NavItem({ item }: { item: INavItem }) {
  const { href, label, children, image } = item;

  return (
    <li class="group flex items-center">
      <a href={href} class="px-4 py-3">
        <Text
          class="group-hover:border-black border-solid border-b-[3px] border-white uppercase"
          variant="caption"
        >
          {label}
        </Text>
      </a>

      {children && children.length > 0 &&
        (
          <div
            class={`fixed invisible hover:visible group-hover:visible bg-[#ffffffe0] z-50 flex items-start justify-start gap-6 w-screen mt-[${headerHeightDesktop}]`}
            style={{ top: "0px", left: "0px" }}
          >
            {image?.src && (
              <Image
                class="p-6 w-[300px]"
                src={image.src}
                alt={image.alt}
                width={300}
                height={300}
                loading="lazy"
              />
            )}
            <ul class="flex flex-col items-start justify-center pl-20 pt-6">
              {children.map((node) => (
                <li class="pb-2">
                  <a href={node.href}>
                    <Text class="uppercase hover:font-extrabold" variant="menu">{node.label}</Text>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
    </li>
  );
}

export default NavItem;
