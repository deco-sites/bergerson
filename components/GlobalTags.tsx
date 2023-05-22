import { asset, Head } from "$fresh/runtime.ts";

function GlobalTags() {
  return (
    <Head>
      {/* Icons */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={asset("/favicon-32x32.png")}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={asset("/favicon-16x16.png")}
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href={asset("/favicon-32x32.png")}
      />

      {/* Web Manifest */}
      <link rel="manifest" href={asset("/site.webmanifest")} />
      <meta name="theme-color" content="#221E1F" />
      <meta name="msapplication-TileColor" content="#221E1F" />

      {/* Preconnect */}
      <link rel="preconnect" href="https://cookie-script.com" />
      <link rel="preconnect" href="https://cdn.cookie-script.com" />

      {
        /*
         * Include fonts
         * tip: It's always better copy fonts to the `/static/fonts` folder than serving from another
         * domain since DNS resolution times can really affect performance.
         */
      }
      <style
        dangerouslySetInnerHTML={{
          __html: `
          /* latin-ext */
          @font-face {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(${
            asset("/fonts/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2")
          }) format('woff2');
            unicode-range: U+0100-02AF, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          /* latin */
          @font-face {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(${
            asset("/fonts/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2")
          }) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          /* latin-ext */
          @font-face {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(${
            asset("/fonts/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2")
          }) format('woff2');
            unicode-range: U+0100-02AF, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          /* latin */
          @font-face {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(${
            asset("/fonts/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2")
          }) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          /* latin-ext */
          @font-face {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(${
            asset("/fonts/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2")
          }) format('woff2');
            unicode-range: U+0100-02AF, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          /* latin */
          @font-face {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(${
            asset("/fonts/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2")
          }) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          /* latin-ext */
          @font-face {
            font-family: 'DM Serif Display';
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(${
            asset("/fonts/-nFhOHM81r4j6k0gjAW3mujVU2B2G_VB3vD212k.woff2")
          }) format('woff2');
            unicode-range: U+0100-02AF, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          /* latin */
          @font-face {
            font-family: 'DM Serif Display';
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(${
            asset("/fonts/-nFhOHM81r4j6k0gjAW3mujVU2B2G_VB0PD2.woff2")
          }) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          /* latin-ext */
          @font-face {
            font-family: 'DM Serif Display';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(${
            asset("/fonts/-nFnOHM81r4j6k0gjAW3mujVU2B2G_5x0ujy.woff2")
          }) format('woff2');
            unicode-range: U+0100-02AF, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          /* latin */
          @font-face {
            font-family: 'DM Serif Display';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(${
            asset("/fonts/-nFnOHM81r4j6k0gjAW3mujVU2B2G_Bx0g.woff2")
          }) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          @font-face {
            font-family: Montblanc;
            src: url(${
            asset("/fonts/MontblancType-Light.woff.css")
          }) format("woff");
            font-weight: 300;
            font-style: normal;
            font-display: swap
          }
          @font-face {
            font-family: Montblanc;
            src: url(${
            asset("/fonts/MontblancType-Regular.woff.css")
          }) format("woff");
            font-weight: 400;
            font-style: normal;
            font-display: swap
          }
          @font-face {
            font-family: Montblanc;
            src: url(${
            asset("/fonts/MontblancType-Bold.woff.css")
          }) format("woff");
            font-weight: 700;
            font-style: normal;
            font-display: swap
          }
          @font-face {
            font-family: Helvetica;
            src: url(https://static.rolex.com/Fonts/Rolex/HelveticaNow/8d8e92a7-bfd4-4de7-bc65-45be2306bf81.woff2?v=1) format("woff2"),url(https://static.rolex.com/Fonts/Rolex/HelveticaNow/858c1d6a-cfc6-4367-91da-cd8209dcdc6e.woff?v=1) format("woff");
            font-weight: 300;
            font-style: normal;
            font-display: swap
          }
        
          @font-face {
            font-family: Helvetica;
            src: url(https://static.rolex.com/Fonts/Rolex/HelveticaNow/74164382-f210-4a60-95bc-999091a2ed5c.woff2?v=1) format("woff2"),url(https://static.rolex.com/Fonts/Rolex/HelveticaNow/1204057f-8fdd-4c47-98f8-6eadb6bfe197.woff?v=1) format("woff");
            font-weight: 300;
            font-style: italic;
            font-display: swap
          }
        
          @font-face {
            font-family: Helvetica;
            src: url(https://static.rolex.com/Fonts/Rolex/HelveticaNow/aa38329d-5165-4fb4-82c8-fa97778b7cbd.woff2?v=1) format("woff2"),url(https://static.rolex.com/Fonts/Rolex/HelveticaNow/7a5a445e-de3f-4690-9002-552575769c45.woff?v=1) format("woff");
            font-weight: 400;
            font-style: normal;
            font-display: swap
          }
        
          @font-face {
            font-family: Helvetica;
            src: url(https://static.rolex.com/Fonts/Rolex/HelveticaNow/bd4b5949-893c-4f87-843f-a84867b2b03a.woff2?v=1) format("woff2"),url(https://static.rolex.com/Fonts/Rolex/HelveticaNow/362618f8-b6bb-4cfa-aaea-8bc0115c0347.woff?v=1) format("woff");
            font-weight: 400;
            font-style: italic;
            font-display: block
          }
        
          @font-face {
            font-family: Helvetica;
            src: url(https://static.rolex.com/Fonts/Rolex/HelveticaNow/10d97c98-c7f0-4958-b294-92319d027783.woff2?v=1) format("woff2"),url(https://static.rolex.com/Fonts/Rolex/HelveticaNow/e4caf272-7860-4dd4-9768-8ecc229ce7c3.woff?v=1) format("woff");
            font-weight: 700;
            font-style: normal;
            font-display: swap
          }

          @font-face {
            font-family: Rolex;
            src: url(https://static.rolex.com/Fonts/Rolex/RolexFont/2.1/RolexFont-Light-WebS.woff2?v=1),format("woff2"),url(https://static.rolex.com/Fonts/Rolex/RolexFont/2.1/RolexFont-Light-WebS.woff?v=1) format("woff");
            font-weight: 300;
            font-style: normal;
            font-display: block
          }

          @font-face {
            font-family: Rolex;
            src: url(https://static.rolex.com/Fonts/Rolex/RolexFont/2.1/RolexFont-LightItalic-WebS.woff2?v=1) format("woff2"),url(https://static.rolex.com/Fonts/Rolex/RolexFont/2.1/RolexFont-LightItalic-WebS.woff?v=1) format("woff");
            font-weight: 300;
            font-style: italic;
            font-display: swap
          }

          @font-face {
            font-family: Rolex;
            src: url(https://static.rolex.com/Fonts/Rolex/RolexFont/2.1/RolexFont-Regular-WebS.woff2?v=1) format("woff2"),url(https://static.rolex.com/Fonts/Rolex/RolexFont/2.1/RolexFont-Regular-WebS.woff?v=1) format("woff");
            font-weight: 400;
            font-style: normal;
            font-display: block
          }

          @font-face {
            font-family: Rolex;
            src: url(https://static.rolex.com/Fonts/Rolex/RolexFont/2.1/RolexFont-Italic-WebS.woff2?v=1) format("woff2"),url(https://static.rolex.com/Fonts/Rolex/RolexFont/2.1/RolexFont-Italic-WebS.woff?v=1) format("woff");
            font-weight: 400;
            font-style: italic;
            font-display: swap
          }

          @font-face {
            font-family: Rolex;
            src: url(https://static.rolex.com/Fonts/Rolex/RolexFont/2.1/RolexFont-Bold-WebS.woff2?v=1) format("woff2"),url(https://static.rolex.com/Fonts/Rolex/RolexFont/2.1/RolexFont-Bold-WebS.woff?v=1) format("woff");
            font-weight: 700;
            font-style: normal;
            font-display: swap
          }

          @font-face {
            font-family: Rolex;
            src: url(https://static.rolex.com/Fonts/Rolex/RolexFont/2.1/RolexFont-BoldItalic-WebS.woff2?v=1) format("woff2"),url(https://static.rolex.com/Fonts/Rolex/RolexFont/2.1/RolexFont-BoldItalic-WebS.woff?v=1) format("woff");
            font-weight: 700;
            font-style: italic;
            font-display: swap
          }

          @font-face {
            font-family: Rolex;
            src: url(https://static.rolex.com/Fonts/Rolex/RolexFont/2.1/RolexFont-Light-WebXL.woff2?v=1) format("woff2"),url(https://static.rolex.com/Fonts/Rolex/RolexFont/2.1/RolexFont-Light-WebXL.woff?v=1) format("woff");
            font-weight: 300;
            font-style: normal;
            font-display: swap
          }

          @font-face {
            font-family: Rolex;
            src: url(https://static.rolex.com/Fonts/Rolex/RolexFont/2.1/RolexFont-LightItalic-WebXL.woff2?v=1) format("woff2"),url(https://static.rolex.com/Fonts/Rolex/RolexFont/2.1/RolexFont-LightItalic-WebXL.woff?v=1) format("woff");
            font-weight: 300;
            font-style: italic;
            font-display: swap
          }

          @font-face {
            font-family: Rolex;
            src: url(https://static.rolex.com/Fonts/Rolex/RolexFont/2.1/RolexFont-Regular-WebXL.woff2?v=1) format("woff2"),url(https://static.rolex.com/Fonts/Rolex/RolexFont/2.1/RolexFont-Regular-WebXL.woff?v=1) format("woff");
            font-weight: 400;
            font-style: normal;
            font-display: swap
          }

          @font-face {
            font-family: Rolex;
            src: url(https://static.rolex.com/Fonts/Rolex/RolexFont/2.1/RolexFont-Italic-WebXL.woff2?v=1) format("woff2"),url(https://static.rolex.com/Fonts/Rolex/RolexFont/2.1/RolexFont-Italic-WebXL.woff?v=1) format("woff");
            font-weight: 400;
            font-style: italic;
            font-display: swap
          }

          @font-face {
            font-family: Rolex;
            src: url(https://static.rolex.com/Fonts/Rolex/RolexFont/2.1/RolexFont-Bold-WebXL.woff2?v=1) format("woff2"),url(https://static.rolex.com/Fonts/Rolex/RolexFont/2.1/RolexFont-Bold-WebXL.woff?v=1) format("woff");
            font-weight: 700;
            font-style: normal;
            font-display: swap
          }

          @font-face {
            font-family: Rolex;
            src: url(https://static.rolex.com/Fonts/Rolex/RolexFont/2.1/RolexFont-BoldItalic-WebXL.woff2?v=1?v=1) format("woff2"),url(https://static.rolex.com/Fonts/Rolex/RolexFont/2.1/RolexFont-BoldItalic-WebXL.woff?v=1) format("woff");
            font-weight: 700;
            font-style: italic;
            font-display: swap
          }
        `,
        }}
      />
    </Head>
  );
}

export default GlobalTags;
