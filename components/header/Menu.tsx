import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import Text from "deco-sites/fashion/components/ui/Text.tsx";
import Button from "deco-sites/fashion/components/ui/Button.tsx";
import { useSignal } from "@preact/signals";
import type { INavItem } from "./NavItem.tsx";

export interface Props {
  items: INavItem[];
}

function MenuItem({ item, level = 0 }: { item: INavItem; level?: number }) {
  const open = useSignal(false);
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;

  const title = (
    <Text
      class="flex-grow min-h-[40px] flex items-center justify-center uppercase"
      variant={level === 0 ? "menu" : "caption"}
    >
      {item.label}
    </Text>
  );

  return (
    <li class={level === 0 ? "border-b-1 border-black border-solid" : ""}>
      <div
        class="flex justify-between items-center w-full pb-2"
        onClick={() => {
          if (hasChildren) open.value = !open.value;
        }}
      >
        <span class="flex w-[20px] h-[20px]" />

        {hasChildren
          ? title
          : <a class="w-full inline-block" href={item.href}>{title}</a>}

        {hasChildren
          ? (
            <Button variant="icon">
              <Icon
                class={open.value === true ? "hidden" : "block"}
                id="Plus"
                height={20}
                width={20}
                strokeWidth={1.5}
              />
              <Icon
                class={open.value === true ? "block" : "hidden"}
                id="Minus"
                height={20}
                width={20}
                strokeWidth={1.5}
              />
            </Button>
          )
          : <span class="flex w-[20px] h-[20px]" />}
      </div>

      {hasChildren && (
        <ul
          class={`flex-col ${
            open.value === true ? "flex" : "hidden"
          } border-t-1 border-black border-solid`}
        >
          {item.children!.map((node) => (
            <MenuItem
              item={node}
              level={level + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

function Menu({ items }: Props) {
  return (
    <div>
      <ul class="px-16 flex-grow flex flex-col">
        {items.map((item) => <MenuItem item={item} />)}
      </ul>
    </div>
  );
}

export default Menu;
