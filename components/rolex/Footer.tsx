import Container from "deco-sites/fashion/components/ui/Container.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Icon from "../ui/Icon.tsx";

export interface Item {
  url: string;
  label: string;
}

export interface Props {
  logo: LiveImage;
  items: Item[];
}

export default function Footer(props: Props) {
  return (
    <Container class="py-20 px-5 flex flex-col gap-8 items-center justify-between md:justify-center relative">
      <div class="flex flex-col-reverse md:flex-col gap-8 items-center justify-between w-full">
        <img src={props.logo} alt="Rolex" width={82} />

        <ul class="flex flex-col md:flex-row items-center w-full">
          {props.items.map((item) => (
            <li class="border-t-1 boder-solid border-gray-200 md:border-t-0 py-2 w-full">
              <a
                href={item.url}
                class="block transition uppercase text-xs text-[#1b1b1b] hover:text-[#127749] w-full text-center font-helvetica"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <span class="cursor-pointer flex items-center justify-center w-[34px] h-[34px] rounded-full bg-[#127749]">
        <Icon
          width={18}
          height={18}
          id="ChevronUp"
          strokeWidth={2}
          class="text-white"
        />
      </span>
    </Container>
  );
}
