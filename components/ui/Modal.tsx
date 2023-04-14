import Text from "deco-sites/fashion/components/ui/Text.tsx";
import Button from "deco-sites/fashion/components/ui/Button.tsx";
import { useEffect, useRef } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import type { JSX } from "preact";
import { bergersonLogo } from "../header/constants.ts";

import Icon from "./Icon.tsx";
import Logo from "./Logo.tsx";
import type { NavImage } from "../header/Header.tsx";
import ListItem from "./ListItem.tsx";

// Lazy load a <dialog> polyfill.
if (IS_BROWSER && typeof window.HTMLDialogElement === "undefined") {
  await import(
    "https://raw.githubusercontent.com/GoogleChrome/dialog-polyfill/5033aac1b74c44f36cde47be3d11f4756f3f8fda/dist/dialog-polyfill.esm.js"
  );
}

export type Props = JSX.IntrinsicElements["dialog"] & {
  title?: string;
  mode?: "sidebar-right" | "sidebar-left" | "center";
  onClose?: () => Promise<void> | void;
  loading?: "lazy" | "eager";
  img?: NavImage;
};

const dialogStyles = {
  "sidebar-right": "animate-slide-left",
  "sidebar-left": "animate-slide-right",
  center: "animate-fade-in",
};

const sectionStyles = {
  "sidebar-right": "justify-end",
  "sidebar-left": "justify-start",
  center: "justify-center items-center",
};

const containerStyles = {
  "sidebar-right": "h-full w-full sm:(max-w-lg)",
  "sidebar-left": "h-full w-full sm:(max-w-lg)",
  center: "",
};

const Modal = ({
  open,
  title,
  mode = "sidebar-right",
  onClose,
  children,
  loading,
  img,
  ...props
}: Props) => {
  const lazy = useSignal(false);
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open === false) {
      document.getElementsByTagName("body").item(0)?.removeAttribute(
        "no-scroll",
      );
      ref.current?.open === true && ref.current.close();
    } else if (open === true) {
      document.getElementsByTagName("body").item(0)?.setAttribute(
        "no-scroll",
        "",
      );
      ref.current?.open === false && ref.current.showModal();
      lazy.value = true;
    }
  }, [open]);

  return (
    <dialog
      {...props}
      ref={ref}
      class={`bg-transparent p-0 m-0 max-w-full w-full max-h-full h-full backdrop ${
        dialogStyles[mode]
      } ${props.class ?? ""}`}
      onClick={(e) =>
        (e.target as HTMLDialogElement).tagName === "SECTION" && onClose?.()}
      // @ts-expect-error - This is a bug in types.
      onClose={onClose}
    >
      <section
        class={`w-full h-full flex bg-transparent ${sectionStyles[mode]}`}
      >
        <div
          class={`bg-default flex flex-col max-h-full ${containerStyles[mode]}`}
        >
          <header class="flex px-4 py-[15px] h-[52px] justify-between items-center border-default">
            <div class={`w-[19px]`}></div>
            {img && <Logo img={img} />}
            <Button variant="icon" onClick={onClose}>
              <Icon id="XMark" width={20} height={20} strokeWidth={2} />
            </Button>
          </header>
          <div class="overflow-y-auto flex-grow flex justify-between flex-col">
            <div>
              {loading === "lazy" ? lazy.value && children : children}
            </div>
            <div class="pb-4">
              <ul class="px-16 flex flex-col divide-y divide-black">
                <ListItem href="/" name="Minha conta" />
                <ListItem href="/" name="Resgate seu bônus" />
                <ListItem href="/" name="B Magazine" />
              </ul>
              <div class="w-full flex justify-center">
                <iframe
                  src="https://static.rolex.com/retailers/clock/?colour=gold&amp;apiKey=903dce3692b5146aa14d49b74da13862&amp;lang=pt_br"
                  style="width:170px;height:70px;border:0;margin:0;padding:0;overflow:hidden;z-index:0;position:relative;scroll:none;"
                  scrolling="NO"
                  title="Rolex"
                >
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </dialog>
  );
};

export default Modal;
