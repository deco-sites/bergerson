import Icon from "../ui/Icon.tsx";
import { useSignal } from "@preact/signals";
import Text from "deco-sites/fashion/components/ui/Text.tsx";

import type {
  Filter,
  FilterToggle,
  ProductListingPage,
} from "deco-sites/std/commerce/types.ts";

interface Props {
  filters: ProductListingPage["filters"];
}

const isToggle = (filter: Filter): filter is FilterToggle => {
  return filter["@type"] === "FilterToggle";
};

const redundantFilters = (filter: Filter): boolean => {
  return filter.key !== "Departments" && filter.key !== "Brands";
};

function FilterValues({ values }: FilterToggle) {
  const goTo = (url: string) => () => (window.location.href = url);
  const selectedValue = values.find((value) => value.selected);

  if (selectedValue) {
    return (
      <>
        <a href={selectedValue.url} class="flex items-center gap-2">
          <span class="text-xs">{selectedValue.label}</span>
        </a>

        <a href={selectedValue.url} class="flex items-center gap-2">
          <span class="text-xs">
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

            <span class="text-xs">{label} ({quantity})</span>
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
      class="relative flex flex-col gap-4 md:(gap-0)"
      onClick={toggle}
    >
      <span class="flex flex-row justify-between cursor-pointer">
        <Text variant="caption">{filter.label}</Text>
        <Icon id="ChevronDown" width={16} height={16} strokeWidth={1} />
      </span>

      {isOpen.value && (
        <ul class="flex flex-wrap gap-8 flex-col md:(gap-4 shadow-lg p-3 absolute top-full) w-full z-10 bg-white mt-4">
          <FilterValues {...filter} />
        </ul>
      )}
    </li>
  );
}

function Filters({ filters }: Props) {
  return (
    <ul class="flex flex-col gap-8 md:(grid grid-cols-5 gap-x-20 gap-y-8)">
      {filters
        .filter(isToggle)
        .filter(redundantFilters)
        .map(renderFilter)}
    </ul>
  );
}

export default Filters;
