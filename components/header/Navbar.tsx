import HeaderButton from "deco-sites/fashion/islands/HeaderButton.tsx";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import Button from "deco-sites/fashion/components/ui/Button.tsx";

import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import HeaderSearchMenu from "deco-sites/fashion/islands/HeaderSearchMenu.tsx";
import type { INavItem } from "./NavItem.tsx";
import type { Props as SearchbarProps } from "deco-sites/fashion/components/search/Searchbar.tsx";

function Navbar({ items, searchbar }: {
  items: INavItem[];
  searchbar: SearchbarProps;
}) {
  return (
    <>
      {/* Mobile Version */}
      <div
        class={`md:hidden flex flex-row justify-between items-center h-[${navbarHeight}] border-b-1 border-default w-full px-5 gap-2`}
      >
        <div class={`w-[51px] flex justify-start`}>
          <HeaderButton variant="menu" />
        </div>
        <a
          href="/"
          class={`flex-grow inline-flex justify-center items-center min-h-[${navbarHeight}]`}
          aria-label="Store logo"
        >
          <img
            class={`w-[160px] h-[21px]`}
            src="https://bergersonjoias.vteximg.com.br/arquivos/LOGO-BERGERSON-v23-260x34px-v2.png?v=638066399283770000"
            alt="Logo Bergerson"
          />
        </a>

        <div class="w-[51px] flex justify-between">
          <img
            class={`w-[18px] h-[18px]`}
            src="https://bergersonjoias.vteximg.com.br/arquivos/icon-search-header.png"
            alt="Search products button"
          />
          <img
            class={`w-[18px] h-[20px]`}
            src="https://www.bergersonjoias.com/arquivos/bg-v23-mybag.png?v=638000718382000000"
            alt="My cart button"
          />
        </div>
      </div>

      {/* Desktop Version */}
      <div class="hidden md:flex flex-row justify-between items-center border-b-1 border-default w-full pl-2 pr-3">
        <div class="flex-none w-44">
          <a href="/" aria-label="Store logo" class="block px-4 py-3 w-[160px]">
            <Icon id="Logo" width={126} height={16} />
          </a>
        </div>
        <div class="flex-auto flex justify-center">
          {items.map((item) => <NavItem item={item} />)}
        </div>
        <div class="flex-none w-44 flex items-center justify-end gap-2">
          <HeaderButton variant="search" />
          <HeaderSearchMenu searchbar={searchbar} />
          <Button
            as="a"
            variant="icon"
            href="/login"
            aria-label="Log in"
          >
            <Icon id="User" width={20} height={20} strokeWidth={0.4} />
          </Button>
          <Button
            as="a"
            variant="icon"
            href="/wishlist"
            aria-label="Wishlist"
          >
            <Icon
              id="Heart"
              width={20}
              height={20}
              strokeWidth={2}
              fill="none"
            />
          </Button>
          <HeaderButton variant="cart" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
