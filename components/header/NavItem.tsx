import Text from "deco-sites/fashion/components/ui/Text.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { useSignal } from "@preact/signals";
import { headerHeightDesktop } from "./constants.ts";

export interface INavItem {
  label: string;
  href: string;
  newPage?: boolean;
  children?: INavItem[];
  image?: { src?: LiveImage; alt?: string };
}

function NavItem({ item }: { item: INavItem }) {
  const { href, label, children, newPage } = item;
  const imageIndex = useSignal(0);
  const target = newPage ? "_blank" : "_self";

  const baseChildrenClasses =
    `overflow-hidden top-0 left-0 fixed max-h-0 z-50 w-screen mt-[${headerHeightDesktop}] opacity-0 bg-[#ffffffe0]`;

  return (
    <div class="group flex items-center">
      <a
        href={href}
        target={target}
        class="h-full px-[35px] flex items-center whitespace-nowrap"
      >
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
            class={`${baseChildrenClasses} hover:(max-h-full opacity-100 duration-700) group-hover:(max-h-full opacity-100 duration-700) transition-[max-height, opacity] duration-200 ease-in-out`}
          >
            <div class="px-[30px] py-[45px] flex items-start justify-start gap-6 w-full">
              <div class="w-[300px] h-[300px] relative">
                {children.map((item, index) => {
                  const isActive = index === imageIndex.value;
                  const opacityClass = isActive
                    ? "opacity-100 z-10"
                    : "opacity-0";

                  return (
                    <img
                      alt={label}
                      loading="lazy"
                      decoding="async"
                      src={item.image?.src}
                      class={`w-[300px] h-[300px] object-cover transition ease-in-out duration-1000 absolute ${opacityClass}`}
                    />
                  );
                })}
              </div>

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
          </div>
        )}
    </div>
  );
}

export default NavItem;
