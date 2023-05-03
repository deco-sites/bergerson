import HeaderButton from "deco-sites/fashion/islands/HeaderButton.tsx";
import Button from "deco-sites/fashion/components/ui/Button.tsx";
import NavItem from "./NavItem.tsx";
import { navbarHeight, navbarHeightDesktop } from "./constants.ts";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import HeaderSearchMenu from "deco-sites/fashion/islands/HeaderSearchMenu.tsx";
import type { INavItem } from "./NavItem.tsx";
import type { NavImage } from "./Header.tsx";
import type { Props as SearchbarProps } from "deco-sites/fashion/components/search/Searchbar.tsx";
import Logo from "../ui/Logo.tsx";
import { useUI } from "../../sdk/useUI.ts";
import Icon from "../ui/Icon.tsx";
import { useCart } from "deco-sites/std/commerce/vtex/hooks/useCart.ts";

const CHECKOUT_URL =
  "https://bergersonjoias.vtexcommercestable.com.br/checkout";

function Navbar({ items, searchbar, img, cartImage }: {
  items: INavItem[];
  searchbar: SearchbarProps;
  img: NavImage;
  cartImage: LiveImage;
}) {
  const { displaySearchbar } = useUI();
  const open = displaySearchbar.value;

  return (
    <>
      {(open) ? <MenuSearchbar searchbar={searchbar} img={img} /> : (
        <Menu
          items={items}
          searchbar={searchbar}
          img={img}
          cartImage={cartImage}
        />
      )}
    </>
  );
}

function MenuSearchbar(
  { searchbar, img }: { searchbar: SearchbarProps; img: NavImage },
) {
  return (
    <>
      <div
        class={` max-w-[1700px] min-w-[991px] hidden md:flex flex-row justify-between items-center w-full px-[70px] h-[${navbarHeightDesktop}]`}
      >
        <div class="flex-none">
          <a href="/" aria-label="Store logo" class="block w-[160px]">
            <Logo img={img} />
          </a>
        </div>
        <HeaderSearchMenu searchbar={searchbar} />
      </div>
      <div
        class={`md:hidden flex flex-row  items-center h-[${navbarHeight}] w-full px-3`}
      >
        <div class="flex-none">
          <a href="/" aria-label="Store logo" class="block w-[160px]">
            <Logo img={img} />
          </a>
        </div>
        <HeaderSearchMenu searchbar={searchbar} />
      </div>
    </>
  );
}

function Menu({ items, img, cartImage }: {
  items: INavItem[];
  searchbar: SearchbarProps;
  img: NavImage;
  cartImage: LiveImage;
}) {
  const { displaySearchbar } = useUI();
  const { cart, loading } = useCart();
  const cartWithId = `${CHECKOUT_URL}?orderFormId=${cart?.value?.orderFormId}`;
  const cartUrl = loading.value ? CHECKOUT_URL : cartWithId;

  return (
    <>
      {/* Mobile */}
      <div
        class={`md:hidden flex flex-row justify-between items-center h-[${navbarHeight}] w-full px-5 gap-2`}
      >
        <div class={`w-[51px] flex justify-start`}>
          <HeaderButton variant="menu" />
        </div>
        <a
          href="/"
          class={`md:hidden flex-grow inline-flex justify-center items-center min-h-[${navbarHeight}]`}
          aria-label="Store logo"
        >
          <Logo img={img} />
        </a>

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
            aria-label="My cart"
            loading={loading.value}
          >
            <img
              src={cartImage}
              alt="My cart button"
              class={`w-[26px] h-[26px] object-contain`}
            />
          </Button>
        </div>
      </div>
      {/* Desktop */}
      <div
        class={`max-w-[1700px] hidden md:flex flex-row justify-between items-center w-full px-[70px] h-[${navbarHeightDesktop}]`}
      >
        <div class="flex-none">
          <a href="/" aria-label="Store logo" class="block w-[160px]">
            <Logo img={img} />
          </a>
        </div>
        <div class="px-[30px] flex h-[135px] gap-[70px] pt-[1px] ml-[8px]">
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
              loading={loading.value}
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
      </div>
    </>
  );
}

export default Navbar;
