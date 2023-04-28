import Navbar from "./Navbar.tsx";
import { navbarHeight, navbarHeightDesktop } from "./constants.ts";
import Modals from "deco-sites/fashion/islands/HeaderModals.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { EditableProps as SearchbarProps } from "deco-sites/fashion/components/search/Searchbar.tsx";

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
  badge?: { src?: LiveImage; alt?: string; href?: string };
}

export interface Props {
  /** @title Search Bar */
  searchbar?: SearchbarProps;
  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  menu?: NavItem[];
  /**
   * @title Logo and badge image
   * @description Navigation items used both on mobile and desktop menus
   */
  navImage?: NavImage;
  cartImage: LiveImage;
}

function Header(
  {
    searchbar: _searchbar,
    menu = [],
    navImage,
    cartImage,
  }: Props,
) {
  const searchbar = { ..._searchbar };

  return (
    <header class={`lg:h-[${navbarHeightDesktop}] h-[${navbarHeight}]`}>
      <div class="flex items-center justify-center bg-default fixed w-full z-50 shadow-header border-b-1 border-default">
        <Navbar
          items={menu}
          searchbar={searchbar}
          img={navImage!}
          cartImage={cartImage}
        />
      </div>
      <Modals
        menu={{ items: menu }}
        searchbar={searchbar}
        img={navImage}
      />
    </header>
  );
}

export default Header;
