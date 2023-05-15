import type { JSX } from "preact";

type Props = JSX.IntrinsicElements["div"];

function Container({ class: _class = "", ...props }: Props) {
  return <div class={`sm:max-w-[1280px] mx-auto ${_class}`} {...props} />;
}

export function InstituionalContainer({ class: _class = "", ...props }: Props) {
  return (
    <div
      class={`xl:max-w-[1170px] md:max-w-[970px] w-full px-[15px] mx-auto ${_class}`}
      {...props}
    />
  );
}

export default Container;
