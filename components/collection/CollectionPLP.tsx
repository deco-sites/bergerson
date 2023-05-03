import type { LoaderReturnType } from "$live/types.ts";
import Head from "deco-sites/bergerson/components/head/Head.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { RequestViewer } from "deco-sites/bergerson/functions/requestViewer.ts";
import { Props as HeadProps } from "deco-sites/bergerson/components/head/interface.tsx";

export interface Banner {
  /** @description RegExp to enable this banner on the current URL. Use /feminino/* to display this banner on feminino category  */
  matcher: string;
  name: string;

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
  head: HeadProps;
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
          width="100%"
          height={210}
          class="w-full h-[210px] lg:h-screen object-cover"
          src={data.image.desktop}
          alt={data.image.alt ?? "Bergerson"}
        />
      </Picture>

      <div class="flex flex-1 w-full h-full absolute items-center justify-center">
        <div class="max-w-[600px] w-full flex items-center justify-center md:justify-between">
          <img
            width="57"
            height="29"
            alt="black star"
            src="/black-star.png"
            class="hidden md:block filter invert"
          />

          <h1
            class="font-serif text-white font-bold text-4xl lg:text-5xl text-center"
            dangerouslySetInnerHTML={{ __html: data.title }}
          />

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
      <div class="flex flex-1 h-full w-full relative">
        <Picture preload={false} class="w-full h-full absolute z-0">
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
            loading="lazy"
            decoding="async"
            class="w-full h-full object-cover"
            src={data.leftImage.desktop}
            alt={data.leftImage.alt ?? "Bergerson"}
          />
        </Picture>
      </div>

      <div class="flex flex-1 w-full h-full absolute z-10 items-center justify-center">
        <div class="w-[200px] h-[200px] bg-white">
          <Picture class="w-full" preload={false}>
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
              width={200}
              height={200}
              loading="lazy"
              decoding="async"
              class="w-full h-full object-cover"
              src={data.spotlight.desktop}
              alt={data.spotlight.alt ?? "Bergerson"}
            />
          </Picture>
        </div>
      </div>

      <div class="flex flex-1 h-full w-full relative">
        <Picture class="w-full h-full absolute z-0" preload={false}>
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
            loading="lazy"
            decoding="async"
            src={data.rightImage.desktop}
            class="w-full h-full object-cover"
            alt={data.rightImage.alt ?? "Bergerson"}
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

function Banner({ head, requestViewer, banners = [] }: Props) {
  if (!requestViewer || !requestViewer.request.url) {
    return null;
  }

  const url = new URL(requestViewer.request.url);
  const pathname = url.pathname.toLocaleLowerCase();
  const matching = banners.find(({ matcher }) => matcher === pathname);

  if (!matching) {
    return null;
  }

  const { title, description, ...headProps } = head;
  const finalTitle = title.replace(":name", matching.name);
  const finalDescription = matching.secondSection?.description ?? description;

  return (
    <>
      <Head title={finalTitle} description={finalDescription} {...headProps} />
      <BannerUI banner={matching} />
    </>
  );
}

export default Banner;
