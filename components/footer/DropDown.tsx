import Text from "deco-sites/fashion/components/ui/Text.tsx";
import { JSX } from "preact/jsx-runtime";
import { css, tw } from "twind/css";
import { useUI } from "../../sdk/useUI.ts";
import { useSignal } from "@preact/signals";
export interface Props {
  summary: string;
  itens?: string[];
  other?: JSX.Element;
}

function DropDownItem({ summary, itens, other }: Props) {
  const open = useSignal(false)

  return (
    <ul class="flex flex-col lg:hidden lg:flex-row gap-4">
      <li>
        <Text variant="body" tone="default">
          <details>
            <summary
              onClick={() => open.value = !open.value}
              class={tw`list-none font-serif py-2 border-b-2 border-[#4b4b4b] flex justify-between after:transition after:duration-700 ${open.value ? "after:transform after:rotate-180" : "after:rotate-0"}  ${
                css({ "&::after": { content: '"\\2193"'  } })
              }`}
            >
              {summary}
            </summary>

            <ul class="flex flex-col gap-2 px-2 pt-2">
              {itens
                ? itens.map((item) => (
                  <li>
                    <a
                      href="/"
                      class="text-[13px] hover:border-b-1 hover:border-[#4b4b4b]"
                    >
                      {item}
                    </a>
                  </li>
                ))
                : <div>{other}</div>}
            </ul>
          </details>
        </Text>
      </li>
    </ul>
  );
}

export default DropDownItem;
