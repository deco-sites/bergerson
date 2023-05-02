import { NavImage } from "./Header.tsx";
import { lazy, Suspense } from "preact/compat";
import { useUI } from "deco-sites/fashion/sdk/useUI.ts";
import Modal from "deco-sites/fashion/components/ui/Modal.tsx";
import Loading from "deco-sites/fashion/components/ui/Loading.tsx";
import ListItem from "deco-sites/bergerson/components/ui/ListItem.tsx";
import type { Props as MenuProps } from "deco-sites/fashion/components/header/Menu.tsx";
import type { Props as SearchbarProps } from "deco-sites/fashion/components/search/Searchbar.tsx";

const Menu = lazy(() =>
  import("deco-sites/fashion/components/header/Menu.tsx")
);

const Cart = lazy(() =>
  import("deco-sites/fashion/components/minicart/Cart.tsx")
);

interface Props {
  img?: NavImage;
  menu: MenuProps;
  searchbar?: SearchbarProps;
}

function Modals({ menu, img }: Props) {
  const { displayCart, displayMenu } = useUI();

  return (
    <>
      <Modal
        title="Menu"
        mode="sidebar-left"
        loading="lazy"
        img={img}
        open={displayMenu.value}
        onClose={() => {
          displayMenu.value = false;
        }}
      >
        <Suspense fallback={<Loading />}>
          <div class="flex flex-1 flex-col">
            <Menu {...menu} />

            <div class="pb-4 mt-24">
              <ul class="px-16 flex flex-col divide-y divide-black">
                <ListItem href="/" label="Minha conta" />
                <ListItem href="/" label="Resgate seu bônus" />
                <ListItem href="/" label="B Magazine" />
              </ul>
              <div class="w-full flex justify-center">
                <a href={img?.badge?.href}>
                  <img
                    loading="lazy"
                    decoding="async"
                    src={img?.badge?.src}
                    class={`w-[160px] h-[70px]`}
                    alt={img?.badge?.alt ?? "Rolex"}
                  />
                </a>
              </div>
            </div>
          </div>
        </Suspense>
      </Modal>

      <Modal
        title="Minha sacola"
        mode="sidebar-right"
        loading="lazy"
        open={displayCart.value}
        onClose={() => {
          displayCart.value = false;
        }}
      >
        <Suspense fallback={<Loading />}>
          <Cart />
        </Suspense>
      </Modal>
    </>
  );
}

export default Modals;
