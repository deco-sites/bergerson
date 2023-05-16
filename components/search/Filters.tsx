import Icon from "../ui/Icon.tsx";
import { useSignal } from "@preact/signals";
import Text from "deco-sites/fashion/components/ui/Text.tsx";
import type { Filter, FilterToggle } from "deco-sites/std/commerce/types.ts";

interface Props {
  filters: FilterToggle[];
}

function FilterValues({ values }: FilterToggle) {
  const goTo = (url: string) => () => (window.location.href = url);
  const selectedValue = values.find((value) => value.selected);

  if (selectedValue) {
    return (
      <>
        <a href={selectedValue.url} class="flex items-center gap-2">
          <span class="text-[14px] font-light">{selectedValue.label}</span>
        </a>

        <a href={selectedValue.url} class="flex items-center gap-2">
          <span class="text-[14px] font-light">
            Veja todas as opções
          </span>
        </a>
      </>
    );
  }

  return (
    <>
      {values.map(({ label, url, selected, quantity }) => {
        return (
          <a href={url} class="flex items-center gap-2">
            <input
              readOnly
              type="checkbox"
              checked={selected}
              onClick={goTo(url)}
              class="cursor-pointer"
            />

            <span class="text-[14px] font-light">{label} ({quantity})</span>
          </a>
        );
      })}
    </>
  );
}

function renderFilter(filter: FilterToggle) {
  const isOpen = useSignal(false);
  const toggle = () => (isOpen.value = !isOpen.value);

  return (
    <li
      class="relative flex flex-col gap-4 md:(gap-0) border-1 border-black py-[19px] px-[20px]"
      onClick={toggle}
    >
      <span class="flex flex-row justify-between cursor-pointer">
        <Text variant="caption" class="text-[15px]">{filter.label}</Text>
        <Icon id="ChevronDown" width={16} height={16} strokeWidth={2} />
      </span>

      {isOpen.value && (
        <ul class="flex flex-wrap gap-8 flex-col md:(gap-4 p-4 absolute left-0 top-full border-x-1 border-b-1 border-black w-[calc(100%+2px)] -ml-[1px]) w-full z-10 bg-white">
          <FilterValues {...filter} />
        </ul>
      )}
    </li>
  );
}

function Filters({ filters }: Props) {
  return (
    <ul class="flex flex-col gap-8 md:(grid grid-cols-4 gap-[17px])">
      {filters.map(renderFilter)}
    </ul>
  );
}

export default Filters;
