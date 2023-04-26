import type { LoaderReturnType } from "$live/types.ts";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { RequestViewer } from "deco-sites/bergerson/functions/requestViewer.ts";

export interface Banner {
  /** @description RegExp to enable this banner on the current URL. Use /feminino/* to display this banner on feminino category  */
  matcher: string;

  firstSection?: {
    image: {
      /** @description Image for big screens */
      desktop: LiveImage;
      /** @description Image for small screens */
      mobile: LiveImage;
      /** @description image alt text */
      alt?: string;
    };

    title: string;
  };

  secondSection?: {
    title: string;
    subtitle: string;
    description: string;
  };

  thirdSection?: {
    leftImage: {
      /** @description Image for big screens */
      desktop: LiveImage;
      /** @description Image for small screens */
      mobile: LiveImage;
      /** @description image alt text */
      alt?: string;
    };

    rightImage: {
      /** @description Image for big screens */
      desktop: LiveImage;
      /** @description Image for small screens */
      mobile: LiveImage;
      /** @description image alt text */
      alt?: string;
    };

    spotlight: {
      /** @description Image for big screens */
      desktop: LiveImage;
      /** @description Image for small screens */
      mobile: LiveImage;
      /** @description image alt text */
      alt?: string;
    };
  };
}

export interface Props {
  requestViewer?: LoaderReturnType<RequestViewer | null>;
  banners?: Banner[];
}

function FirstSection({ data }: { data: Banner["firstSection"] }) {
  if (!data) return null;

  return (
    <div class="grid grid-cols-1 grid-rows-1 h-[210px] lg:h-screen relative">
      <Picture preload class="col-start-1 col-span-1 row-start-1 row-span-1">
        <Source
          width={360}
          src={data.image.mobile}
          media="(max-width: 767px)"
        />
        <Source
          width={1440}
          src={data.image.desktop}
          media="(min-width: 767px)"
        />
        <img
          class="w-full h-[210px] lg:h-screen object-cover"
          src={data.image.desktop}
          alt={data.image.alt}
        />
      </Picture>

      <div class="flex flex-1 w-full h-full absolute items-center justify-center">
        <div class="max-w-[600px] w-full flex items-center justify-between">
          <img
            width="57"
            height="29"
            alt="black star"
            src="/black-star.png"
            class="hidden md:block filter invert"
          />

          <h1 class="font-serif text-white font-bold text-4xl lg:text-5xl text-center">
            {data.title}
          </h1>

          <img
            width="57"
            height="29"
            alt="black star"
            src="/black-star.png"
            class="hidden md:block filter invert"
          />
        </div>
      </div>
    </div>
  );
}

function SecondSection({ data }: { data: Banner["secondSection"] }) {
  if (!data) return null;

  return (
    <div class="py-12 px-4 lg:py-24 flex items-center justify-center">
      <div class="w-full max-w-[800px] flex flex-col items-center justify-center gap-4 lg:gap-6">
        <h1 class="font-serif font-bold text-4xl lg:text-5xl text-center max-w-[600px]">
          {data.title}
        </h1>

        <h2 class="font-semibold text-lg lg:text-xl text-center">
          {data.subtitle}
        </h2>

        <p class="font-normal font-sm text-center">{data.description}</p>
      </div>
    </div>
  );
}

function ThirdSection({ data }: { data: Banner["thirdSection"] }) {
  if (!data) return null;

  return (
    <div class="flex flex-col lg:flex-row flex-1 h-screen relative">
      <div class="flex flex-1 h-full w-full">
        <Picture class="col-start-1 col-span-1 row-start-1 row-span-1 w-full">
          <Source
            width={360}
            src={data.leftImage.mobile}
            media="(max-width: 767px)"
          />
          <Source
            width={1440}
            src={data.leftImage.desktop}
            media="(min-width: 767px)"
          />
          <img
            class="w-full h-full object-cover"
            src={data.leftImage.desktop}
            alt={data.leftImage.alt}
          />
        </Picture>
      </div>

      <div class="flex flex-1 w-full h-full absolute items-center justify-center">
        <div class="w-[200px] h-[200px] bg-white">
          <Picture class="col-start-1 col-span-1 row-start-1 row-span-1 w-full">
            <Source
              width={360}
              src={data.spotlight.mobile}
              media="(max-width: 767px)"
            />
            <Source
              width={1440}
              src={data.spotlight.desktop}
              media="(min-width: 767px)"
            />
            <img
              class="w-full h-full object-cover"
              src={data.spotlight.desktop}
              alt={data.spotlight.alt}
            />
          </Picture>
        </div>
      </div>

      <div class="flex flex-1 h-full w-full">
        <Picture class="col-start-1 col-span-1 row-start-1 row-span-1 w-full">
          <Source
            width={360}
            src={data.rightImage.mobile}
            media="(max-width: 767px)"
          />
          <Source
            width={1440}
            src={data.rightImage.desktop}
            media="(min-width: 767px)"
          />
          <img
            class="w-full h-full object-cover"
            src={data.rightImage.desktop}
            alt={data.rightImage.alt}
          />
        </Picture>
      </div>
    </div>
  );
}

function BannerUI({ banner }: { banner: Banner }) {
  const { firstSection, secondSection, thirdSection } = banner;

  return (
    <>
      <FirstSection data={firstSection} />
      <SecondSection data={secondSection} />
      <ThirdSection data={thirdSection} />
    </>
  );
}

function Banner({ requestViewer, banners = [] }: Props) {
  if (!requestViewer) {
    return null;
  }

  const url = new URL(requestViewer.request.url);
  const pathname = url.pathname.toLocaleLowerCase();
  const matching = banners.find(({ matcher }) => matcher === pathname);

  if (!matching) {
    return null;
  }

  return <BannerUI banner={matching} />;
}

export default Banner;