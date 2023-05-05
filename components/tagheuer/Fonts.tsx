import { Head } from "$fresh/runtime.ts";

function MontblancHead() {
  return (
    <Head>
      <link
        as="font"
        rel="preload"
        type="font/ttf"
        href="/fonts/Arapey-Regular.ttf"
        crossOrigin="*"
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @font-face {
            font-family: Arapey;
            src: url(/fonts/Arapey-Regular) format("ttf");
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
