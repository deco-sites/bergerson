import { Head } from "$fresh/runtime.ts";

function MontblancHead() {
  return (
    <Head>
      <link
        as="font"
        rel="preload"
        type="font/woff"
        href="/fonts/Helvetica.woff2.css"
        crossOrigin="*"
      />

      <link
        as="font"
        rel="preload"
        type="font/woff"
        href="/fonts/Rolex.woff2"
        crossOrigin="*"
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @font-face {
            font-family: Helvetica;
            src: url(/fonts/Helvetica.woff2.css) format("woff2");
            font-style: normal;
            font-display: swap
          }
          
          @font-face {
            font-family: Rolex;
            src: url(/fonts/Rolex.woff2) format("woff2");
            font-style: normal;
            font-display: swap
          }
      `,
        }}
      />
    </Head>
  );
}

export default MontblancHead;
