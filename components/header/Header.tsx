import Modals from "deco-sites/fashion/islands/HeaderModals.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { EditableProps as SearchbarProps } from "deco-sites/fashion/components/search/Searchbar.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product, Suggestion } from "deco-sites/std/commerce/types.ts";
import Navbar from "./Navbar.tsx";
import { navbarHeight, navbarHeightDesktop } from "./constants.ts";

export interface NavItem {
  label: string;
  href: string;
  children?: Array<{
    label: string;
    href: string;
    image?: {
      src?: LiveImage;
      alt?: string;
    };
  }>;
}
export interface NavImage {
  logo?: { src?: LiveImage; alt?: string };
  badge?: { src?: LiveImage; alt?: string };
}

export interface Props {
  /** @title Search Bar */
  searchbar?: SearchbarProps;
  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: NavItem[];
  /**
   * @title Logo and badge image
   * @description Navigation items used both on mobile and desktop menus
   */
  navImage?: NavImage;
}

function Header(
  {
    searchbar: _searchbar,
    navItems = [],
    navImage,
  }: Props,
) {
  const searchbar = { ..._searchbar };
  return (
    <header class={`lg:h-[${navbarHeightDesktop}] h-[${navbarHeight}]`}>
      <div class="bg-default fixed w-full z-50">
        <Navbar items={navItems} searchbar={searchbar} img={navImage!} />
      </div>
      <Modals
        menu={{ items: navItems }}
        searchbar={searchbar}
        img={navImage}
      />
    </header>
  );
}

export default Header;
