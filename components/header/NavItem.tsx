import Text from "deco-sites/fashion/components/ui/Text.tsx";
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
  const { href, label, children } = item;
  const imageIndex = useSignal(0);

  return (
    <div class="group flex items-center">
      <a href={href} class="h-full px-6 flex items-center">
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
            <ul class="flex flex-col flex-wrap items-start justify-center pl-20  max-h-[356px]">
              {children.map((item, index) => (
                <>
                  <li
                    value={index}
                    class="group py-2.5 pr-20"
                    onMouseLeave={() => (imageIndex.value = 0)}
                    onMouseEnter={() => (imageIndex.value = index)}
                  >
                    <a href={item.href}>
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
    </div>
  );
}

export default NavItem;
