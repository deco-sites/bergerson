import HeaderButton from "deco-sites/fashion/islands/HeaderButton.tsx";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import Button from "deco-sites/fashion/components/ui/Button.tsx";

import NavItem from "./NavItem.tsx";
import {
  bergersonLogo,
  navbarHeight,
  navbarHeightDesktop,
} from "./constants.ts";
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
            src={`${bergersonLogo}`}
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
      <div
        class={`hidden md:flex flex-row justify-between items-center shadow-header w-full px-[70px] h-[${navbarHeightDesktop}]`}
      >
        <div class="flex-none">
          <a href="/" aria-label="Store logo" class="block w-[160px]">
            <img
              class={`w-[160px] h-[20.9px]`}
              src={`${bergersonLogo}`}
              alt="Logo Bergerson"
            />
          </a>
        </div>
        <div class="px-3 flex-auto flex justify-between max-w-[893px] h-[135px]">
          {items.map((item) => <NavItem item={item} />)}
        </div>
        <div class="flex-none w-[326px] flex items-center justify-between">
          <div class="flex gap-5 items-center">
            <img
              class={`w-[22px] h-[22px]`}
              src="https://bergersonjoias.vteximg.com.br/arquivos/icon-search-header.png"
              alt="Search products button"
            />
            <HeaderSearchMenu searchbar={searchbar} />
            <Button
              as="a"
              variant="icon"
              href="/wishlist"
              aria-label="Wishlist"
            >
              <img
                class={`w-[22px] h-[24.8px]`}
                src="https://www.bergersonjoias.com/arquivos/bg-v23-mybag.png?v=638000718382000000"
                alt="My cart button"
              />
            </Button>
            <Button
              as="a"
              variant="icon"
              href="/login"
              aria-label="Log in"
            >
              <img
                class={`w-[22px] h-[24.2px]`}
                src="https://bergersonjoias.vteximg.com.br/arquivos/Icon-my-account-header.png"
                alt="My account button"
              />
            </Button>
          </div>

          <iframe
            src="https://static.rolex.com/retailers/clock/?colour=gold&amp;apiKey=903dce3692b5146aa14d49b74da13862&amp;lang=pt_br"
            style="width:170px;height:70px;border:0;margin:0;padding:0;overflow:hidden;z-index:0;position:relative;scroll:none;"
            scrolling="NO"
            title="Rolex"
          >
          </iframe>
        </div>
      </div>
    </>
  );
}

export default Navbar;
