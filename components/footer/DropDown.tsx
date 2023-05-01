import Text from "deco-sites/fashion/components/ui/Text.tsx";
import { JSX } from "preact/jsx-runtime";
import { css, tw } from "twind/css";
import { useSignal } from "@preact/signals";
import FooterLink from "../ui/FooterLink.tsx";
import { FooterLink as Link } from "./Footer.tsx";
export interface Props {
  itens?: Link[];
  title: string;
  other?: JSX.Element[];
}

function DropDownItem({ title, itens, other }: Props) {
  const open = useSignal(false);

  return (
    <ul class="flex flex-col lg:hidden lg:flex-row gap-4">
      <li>
        <Text variant="body" tone="default">
          <details>
            <summary
              onClick={() => open.value = !open.value}
              class={tw`list-none font-serif py-2 border-b-2 border-[#4b4b4b] flex justify-between after:transition after:duration-700 ${
                open.value
                  ? "after:transform after:rotate-180"
                  : "after:rotate-0"
              }  ${css({ "&::after": { content: '"\\2193"' } })}`}
            >
              {title}
            </summary>

            <ul class="flex flex-col gap-2 px-2 pt-2">
              {itens
                ? itens.map((item) => (
                  <FooterLink href={item.href} label={item.label} />
                ))
                : <div class="flex">{other}</div>}
            </ul>
          </details>
        </Text>
      </li>
    </ul>
  );
}

export default DropDownItem;
