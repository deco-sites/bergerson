import { JSX } from "preact";
import { forwardRef } from "preact/compat";

type Props = Omit<JSX.IntrinsicElements["span"], "aria-level"> & {
  tone?:
    | "default"
    | "default-inverse"
    | "subdued"
    | "subdued-inverse"
    | "price"
    | "section-title"
    | "positive"
    | "critical";
  variant?:
    | "heading-1"
    | "heading-2"
    | "heading-3"
    | "menu"
    | "button"
    | "body"
    | "caption"
    | "list-price";
  "aria-level"?: number;
};

const Text = forwardRef<HTMLSpanElement, Props>((
  { tone = "default", variant = "heading-3", class: _class = "", ...props },
  ref,
) => {
  return (
    <span
      {...props}
      class={`font-heading-1 text-${variant} text-${tone} ${_class}`}
      ref={ref}
    />
  );
});

export default Text;
