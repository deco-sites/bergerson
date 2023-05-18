import { asset, Head } from "$fresh/runtime.ts";
import { useLayoutEffect } from "preact/compat";

export default function CartierContainer() {
  return (
    <>
      <div id="cartier-container" />
      <script
        type="text/javascript"
        src={asset("/scripts/cartier-container.js")}
      />
    </>
  );
}
