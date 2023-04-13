import Text from "deco-sites/fashion/components/ui/Text.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { useSignal } from "@preact/signals";
import { headerHeightDesktop } from "./constants.ts";

export interface INavItem {
  label: string;
  href: string;
  children?: INavItem[];
  image?: { src?: LiveImage; alt?: string };
}

function NavItem({ item }: { item: INavItem }) {
  const { href, label, children, image } = item;

  const imageIndex = useSignal(0);

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
            class={`px-[30px] py-[45px] fixed invisible hover:visible group-hover:visible bg-[#ffffffe0] z-50 flex items-start justify-start gap-6 w-screen mt-[${headerHeightDesktop}]`}
            style={{ top: "0px", left: "0px" }}
          >
            <img
              class="w-[300px] h-[300px]"
              src={children[imageIndex.value].image?.src}
              alt=""
            />
            <ul class="flex flex-col items-start justify-center pl-20 pt-6">
              {children.map((item, index) => (
                <>
                  <li
                    value={index}
                    onMouseEnter={event => imageIndex.value = index}
                    onMouseLeave={() => imageIndex.value = 0}
                    class="group pb-2"
                  >
                    <a href="#">
                      <Text
                        class="uppercase hover:font-extrabold"
                        variant="menu"
                      >
                        {item.label}
                      </Text>
                    </a>
                  </li>
                </>
              ))}
            </ul>
          </div>
        )}
    </li>
  );
}

export default NavItem;
