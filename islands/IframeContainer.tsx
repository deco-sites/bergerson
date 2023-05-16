import { Head } from "$fresh/runtime.ts";

export interface Props {
  test?: boolean;
}

function IframeContainer(props: Props) {
  return (
    <>
      <script
        id="rlx-corner"
        dangerouslySetInnerHTML={{
          __html: `
            (function(b, c, a, d, f, g, h, k, l) {
                var e = c.getElementsByTagName(a)[0];
                a = c.createElement(a);
                var m = function(a) {
                    delete b[d];
                    a(c.getElementById(f), [g, k, h, l])
                };
                b[d] = b[d] || m;
                a.async = !0;
                a.src = "https://corners.rolex.com/rlx-corner.js";
                e.parentNode.insertBefore(a, e)
            }
            )(window, document, "script", "rlxCornerCallback", "rlx-corner", "7f841a9a49c34d5be4bfcdbe52bc0b21", "https://www.bergersonjoias.com/institucional/politicas-de-privacidade", "pt-br", "watches");
            `,
        }}
      />
    </>
  );
}

export default IframeContainer;
