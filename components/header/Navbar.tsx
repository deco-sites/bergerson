import HeaderButton from "deco-sites/fashion/components/header/Buttons.tsx";
import type { Props as SearchbarProps } from "deco-sites/fashion/components/search/Searchbar.tsx";
import Button from "deco-sites/fashion/components/ui/Button.tsx";
import HeaderSearchMenu from "deco-sites/fashion/components/header/HeaderSearchMenu.tsx";
import { useCart } from "deco-sites/std/commerce/vtex/hooks/useCart.ts";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { useUI } from "../../sdk/useUI.ts";
import Icon from "../ui/Icon.tsx";
import Logo from "../ui/Logo.tsx";
import type { NavImage } from "./Header.tsx";
import type { INavItem } from "./NavItem.tsx";
import NavItem from "./NavItem.tsx";
import { navbarHeight, navbarHeightDesktop } from "./constants.ts";

const CHECKOUT_URL =
  "https://bergersonjoias.vtexcommercestable.com.br/checkout";

function Navbar({ items, searchbar, img, cartImage }: {
  items: INavItem[];
  searchbar: SearchbarProps;
  img: NavImage;
  cartImage: LiveImage;
}) {
  const { displaySearchbar } = useUI();
  const { cart, loading } = useCart();

  const open = displaySearchbar.value;
  const cartWithId = `${CHECKOUT_URL}?orderFormId=${cart?.value?.orderFormId}`;
  const cartUrl = loading.value ? CHECKOUT_URL : cartWithId;

  return (
    <>
      {/* Mobile */}
      <div
        class={`md:hidden flex flex-row justify-between items-center h-[${navbarHeight}] w-full px-5 gap-2`}
      >
        {displaySearchbar.value
          ? null
          : (
            <div class={`w-[51px] flex justify-start`}>
              <HeaderButton variant="menu" />
            </div>
          )}
        <a
          href="/"
          class="md:hidden flex-grow inline-flex justify-center items-center w-full"
          aria-label="Store logo"
        >
          <Logo img={img} />
        </a>

        {displaySearchbar.value
          ? <HeaderSearchMenu searchbar={searchbar} />
          : (
            <div class="w-[51px] flex justify-between">
              <Button
                onClick={() => displaySearchbar.value = true}
                aria-label="Pesquisar produtos"
                variant="icon"
              >
                <Icon
                  width={26}
                  height={26}
                  id="MagnifyingGlass"
                  alt="Pesquisar produtos"
                />
              </Button>
              <Button
                as="a"
                variant="icon"
                href={cartUrl}
                class="override:w-[26px]"
                aria-label="My cart"
              >
                <img
                  src={cartImage}
                  alt="My cart button"
                  class={`w-[26px] h-[26px] object-contain`}
                />
              </Button>
            </div>
          )}
      </div>
      {/* Desktop */}
      <div
        class={`max-w-[1700px] hidden md:flex flex-row justify-between items-center w-full md:px-[20px] lg:px-[40px] h-[${navbarHeightDesktop}]`}
      >
        <div class="flex-none">
          <a href="/" aria-label="Store logo" class="block w-[160px]">
            <Logo img={img} />
          </a>
        </div>
        {open ? <HeaderSearchMenu searchbar={searchbar} /> : (
          <>
            <div class="px-[30px] flex h-[135px] pt-[1px] ml-[8px] justify-between w-full">
              {items.map((item) => <NavItem item={item} />)}
            </div>
            <div class="flex-none  flex items-center justify-between">
              <div class="flex gap-4 items-center mr-[30px]">
                <Button
                  onClick={() => displaySearchbar.value = true}
                  aria-label="Pesquisar produtos"
                  variant="icon"
                >
                  <Icon
                    width={26}
                    height={26}
                    id="MagnifyingGlass"
                    alt="Pesquisar produtos"
                  />
                </Button>

                <Button
                  as="a"
                  variant="icon"
                  href={cartUrl}
                  aria-label="Meu carrinho"
                >
                  <img
                    src={cartImage}
                    alt="Meu carrinho"
                    class={`w-[26px] h-[26px] object-contain`}
                  />
                </Button>
                <Button
                  as="a"
                  variant="icon"
                  href="/login"
                  aria-label="Entrar"
                >
                  <Icon
                    id="User"
                    width={26}
                    height={26}
                    alt="Pesquisar produtos"
                  />
                </Button>
              </div>
              <Button
                as="a"
                variant="icon"
                aria-label="Rolex"
                href={img.badge?.href}
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src={img.badge?.src}
                  alt={img.badge?.alt ?? "Rolex"}
                  class="w-[170px] h-[70px] header:block hidden object-contain"
                />
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Navbar;
