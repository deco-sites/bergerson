import type { LoaderReturnType } from "$live/types.ts";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
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
}

export interface Props {
  requestViewer?: LoaderReturnType<RequestViewer | null>;
  banners?: Banner[];
}

function BannerUI({ banner }: { banner: Banner }) {
  const { image } = banner;

  return (
    <div class="grid grid-cols-1 grid-rows-1">
      <Picture preload class="col-start-1 col-span-1 row-start-1 row-span-1">
        <Source
          width={360}
          src={image.mobile}
          media="(max-width: 767px)"
        />
        <Source
          width={1440}
          src={image.desktop}
          media="(min-width: 767px)"
        />
        <img class="w-full" src={image.desktop} alt={image.alt} />
      </Picture>
    </div>
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
