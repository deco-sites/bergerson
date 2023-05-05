import { Head } from "$fresh/runtime.ts";

function MontblancHead() {
  return (
    <Head>
      <link
        as="font"
        rel="preload"
        type="font/woff"
        href="/fonts/MontblancType-Light.woff.css"
        crossOrigin="*"
      />

      <link
        as="font"
        rel="preload"
        type="font/woff"
        href="/fonts/MontblancType-Regular.woff.css"
        crossOrigin="*"
      />

      <link
        as="font"
        rel="preload"
        type="font/woff"
        href="/fonts/MontblancType-Bold.woff.css"
        crossOrigin="*"
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @font-face {
            font-family: Montblanc;
            src: url(/fonts/MontblancType-Light.woff.css) format("woff");
            font-weight: 300;
            font-style: normal;
            font-display: swap
          }
          
          @font-face {
            font-family: Montblanc;
            src: url(/fonts/MontblancType-Regular.woff.css) format("woff");
            font-weight: 400;
            font-style: normal;
            font-display: swap
          }
          
          @font-face {
            font-family: Montblanc;
            src: url(/fonts/MontblancType-Bold.woff.css) format("woff");
            font-weight: 700;
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
