import { useState } from "preact/hooks";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import Container from "deco-sites/fashion/components/ui/Container.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Item {
  url: string;
  label: string;
  /** @default highlighted */
  type: "normal" | "highlighted";
}

export interface Props {
  logo: LiveImage;
  items: Item[];
}

export default function Header(props: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Container class="py-2 px-5 flex flex-row gap-8 items-center justify-between md:justify-center relative">
      <img src={props.logo} alt="Rolex" />

      {/* desktop menu */}
      <ul class="hidden md:flex flex-rol gap-8">
        {props.items.map((item) => {
          if (item.type === "highlighted") {
            return (
              <li>
                <a
                  href={item.url}
                  class="transition uppercase text-xs text-[#127749] border-1 border-solid border-[#127749] py-2 px-6 rounded-full hover:(bg-[#127749] text-white)"
                >
                  {item.label}
                </a>
              </li>
            );
          }

          return (
            <li>
              <a
                href={item.url}
                class="transition uppercase text-xs text-[#1b1b1b] hover:text-[#127749]"
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>

      {/* mobile menu */}
      <div
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        class="flex md:hidden flex-row gap-2 items-center text-sm uppercase cursor-pointer group"
      >
        Menu
        <Icon id="ChevronDown" width={16} height={16} strokeWidth={1} />

        {mobileMenuOpen && (
          <div class="absolute w-full top-[100%] left-0 bg-white">
            <ul class="flex flex-col items-center w-full">
              {props.items.map((item) => (
                <li class="border-t-1 boder-solid border-gray-200 py-2 w-full">
                  <a
                    href={item.url}
                    class="block transition uppercase text-xs text-[#1b1b1b] hover:text-[#127749] w-full text-center"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Container>
  );
}
