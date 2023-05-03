import Text from "deco-sites/fashion/components/ui/Text.tsx";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import type { BreadcrumbList } from "deco-sites/std/commerce/types.ts";

interface Props {
  itemListElement: BreadcrumbList["itemListElement"];
}

function Item(
  {
    name,
    item,
    isLast,
  }: { name?: string; item?: string; isLast?: boolean },
) {
  if (!name || !item) {
    return null;
  }

  const opacity = isLast ? "opacity-50" : "opacity-100";

  return (
    <li class="whitespace-nowrap overflow-hidden overflow-ellipsis">
      <a
        href={item}
        class={`transition-all ${opacity} hover:opacity-100`}
      >
        <span class="text-xs">
          {name}
        </span>
      </a>
    </li>
  );
}

function Breadcrumb({ itemListElement = [] }: Props) {
  return (
    <ul class="flex flex-row gap-2 items-center w-full">
      <Item name="Bergerson Joias" item="/" />
      {itemListElement.map((item, index) => {
        const isLast = (itemListElement.length - 1) === index;

        return (
          <>
            <li class="mt-0.5 text-xs">/</li>
            <Item {...item} isLast={isLast} />
          </>
        );
      })}
    </ul>
  );
}

export default Breadcrumb;
