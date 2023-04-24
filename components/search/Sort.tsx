import { useMemo } from "preact/hooks";
import Text from "deco-sites/fashion/components/ui/Text.tsx";
import { ProductListingPage } from "deco-sites/std/commerce/types.ts";
import type { JSX } from "preact";

const SORT_QUERY_PARAM = "sort";

const useSort = () =>
  useMemo(() => {
    const urlSearchParams = new URLSearchParams(window.location?.search);
    return urlSearchParams.get(SORT_QUERY_PARAM) ?? "";
  }, []);

// TODO: Replace with "search utils"
const applySort = (e: JSX.TargetedEvent<HTMLSelectElement, Event>) => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  urlSearchParams.set(SORT_QUERY_PARAM, e.currentTarget.value);
  window.location.search = urlSearchParams.toString();
};

export type Props = Pick<ProductListingPage, "sortOptions">;

function Sort({ sortOptions }: Props) {
  const sort = useSort();

  return (
    <div class="flex flex-1 md:flex-none flex-row gap-4 items-center justify-center ml-auto">
      <span class="font-semibold text-xs hidden md:block">Ordenar por:</span>
      <select
        id="sort"
        name="sort"
        onInput={applySort}
        class="border-1 border-gray-400 rounded w-full md:w-min h-[34px] px-1 rounded m-2 text-sm text-gray-700 bg-white cursor-pointer outline-none"
      >
        {sortOptions.map(({ value, label }) => (
          <option key={value} value={value} selected={value === sort}>
            <Text variant="caption">{label}</Text>
          </option>
        ))}
      </select>
    </div>
  );
}

export default Sort;
