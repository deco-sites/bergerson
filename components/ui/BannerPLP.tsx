import type { LoaderReturnType } from "$live/types.ts";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import Container from "deco-sites/bergerson/components/ui/Container.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { RequestViewer } from "deco-sites/bergerson/functions/requestViewer.ts";

export interface Banner {
  /** @description RegExp to enable this banner on the current URL. Use /feminino/* to display this banner on feminino category  */
  matcher: string;
  image: {
    /** @description Image for big screens */
    desktop: LiveImage;
    /** @description Image for small screens */
    mobile: LiveImage;
    /** @description image alt text */
    alt?: string;
  };
  description?: {
    logo: LiveImage;
    text: string;
  };
}

export interface Props {
  requestViewer?: LoaderReturnType<RequestViewer | null>;
  banners?: Banner[];
}

function BannerUI({ banner }: { banner: Banner }) {
  const { image, description } = banner;

  return (
    <>
      <div class="grid grid-cols-1 grid-rows-1">
        <Picture preload class="col-start-1 col-span-1 row-start-1 row-span-1">
          <Source
            width={360}
            height={275}
            src={image.mobile}
            media="(max-width: 767px)"
          />
          <Source
            width={1440}
            height={190}
            src={image.desktop}
            media="(min-width: 767px)"
          />
          <img class="w-full" src={image.desktop} alt={image.alt} />
        </Picture>
      </div>

      {description && (
        <Container class="px-4 sm:py-10 flex flex-col gap-2 items-center justify-center">
          <img
            width={200}
            height={115}
            alt={image.alt}
            src={description.logo}
            class="mx-[15px] h-[115px] w-full lg:w-[200px] object-contain"
          />

          <p class="text-center">{description.text}</p>
        </Container>
      )}
    </>
  );
}

function Banner({ requestViewer, banners = [] }: Props) {
  if (!requestViewer || !requestViewer.request.url) {
    return null;
  }

  const url = new URL(requestViewer.request.url);
  const fullUrl = url.pathname + url.search;
  const blockedList = ["/relogios?ft=Victorinox"];
  const matching = banners.find(({ matcher }) => matcher === url.pathname);

  if (blockedList.includes(fullUrl) || !matching) {
    return null;
  }

  return <BannerUI banner={matching} />;
}

export default Banner;
