import type { LoaderReturnType } from "$live/types.ts";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import Container from "deco-sites/bergerson/components/ui/Container.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { RequestViewer } from "deco-sites/bergerson/functions/requestViewer.ts";

export interface Banner {
  /** @description RegExp to enable this banner on the current URL. Use /feminino/* to display this banner on feminino category  */
  matcher: string;
  /** @description RegExp to exclude this banner on some URLs. Use /feminino/blusa to hide this banner only at this page  */
  exclude?: string;
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

function Banner({ requestViewer, banners = [] }: Props) {
  console.log(requestViewer?.request.url);
  if (!requestViewer?.request?.url) {
    return <div aria-hidden="true" class="hidden" />;
  }

  const url = new URL(requestViewer.request.url);
  const fullUrl = url.pathname + url.search;
  const blockedList = ["/relogios?ft=Victorinox"];

  const matching = banners.find(({ matcher, exclude }) => {
    return new RegExp(matcher.toLocaleLowerCase()).test(
      url.pathname.toLocaleLowerCase(),
    ) && !(exclude &&
      new RegExp(exclude.toLocaleLowerCase()).test(
        url.pathname.toLocaleLowerCase(),
      ));
  });

  if (blockedList.includes(fullUrl) || !matching) {
    return <div aria-hidden="true" class="hidden" />;
  }

  console.log(matching);
  return (
    <>
      <div class="grid grid-cols-1 grid-rows-1">
        <Picture preload class="col-start-1 col-span-1 row-start-1 row-span-1">
          <Source
            width={360}
            height={275}
            src={matching.image.mobile}
            media="(max-width: 767px)"
          />
          <Source
            width={1440}
            src={matching.image.desktop}
            media="(min-width: 767px)"
          />
          <img
            class="w-full"
            src={matching.image.desktop}
            alt={matching.image.alt}
          />
        </Picture>
      </div>

      {matching.description && (
        <Container class="px-4 flex flex-col gap-0 items-center justify-center">
          <img
            width={200}
            height={115}
            alt={matching.image.alt}
            src={matching.description.logo}
            class="mx-[15px] h-[115px] w-full lg:w-[200px] object-contain"
          />

          <p class="text-center text-[15px] text-[#333] leading-[1.1]">
            {matching.description.text}
          </p>
        </Container>
      )}
    </>
  );
}

export default Banner;
