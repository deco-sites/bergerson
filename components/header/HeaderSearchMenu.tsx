import { lazy, Suspense } from "preact/compat";

import type { Props as SearchbarProps } from "deco-sites/fashion/components/search/Searchbar.tsx";
import { useUI } from "deco-sites/fashion/sdk/useUI.ts";
import { headerHeight } from "deco-sites/fashion/components/header/constants.ts";

const Searchbar = lazy(() =>
  import("deco-sites/fashion/components/search/Searchbar.tsx")
);

interface Props {
  searchbar: SearchbarProps;
}

export default function HeaderSearchMenu({ searchbar }: Props) {
  const { displaySearchbar } = useUI();
  const open = displaySearchbar.value;

  return (
    <div
      class={`${
        open ? "block" : "hidden"
      }  left-0 md:w-screen  bg-white top-[${headerHeight}] flex-grow `}
    >
      {open && (
        <Suspense fallback={<div />}>
          <Searchbar {...searchbar} />
        </Suspense>
      )}
    </div>
  );
}
