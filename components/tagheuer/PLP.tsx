import { useId } from "preact/hooks";
import type { LoaderReturnType } from "$live/types.ts";
import QuillText from "deco-sites/std/components/QuillText.tsx";
import { Slider } from "deco-sites/fashion/components/ui/Slider.tsx";
import Container from "deco-sites/fashion/components/ui/Container.tsx";
import SliderControllerJS from "deco-sites/fashion/islands/SliderJS.tsx";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { RequestViewer } from "deco-sites/bergerson/functions/requestViewer.ts";
import SearchResult from "deco-sites/bergerson/components/search/SearchResult.tsx";
import type { Props as TagHeuerConfig } from "deco-sites/bergerson/sections/TagHeuer.global.tsx";

export interface Props {
  logo?: LiveImage;
  page: LoaderReturnType<ProductListingPage | null>;
  requestViewer?: LoaderReturnType<RequestViewer | null>;
  tagHeuerConfig?: LoaderReturnType<TagHeuerConfig | null>;
}

function MenuMobile(props: Props) {
  const id = useId() + "shelf-controller-mobile";
  const { collections } = props.tagHeuerConfig ?? {};

  return (
    <div
      id={id}
      class="block md:hidden grid grid-cols-[1fr] grid-rows-[30px]"
    >
      <Slider
        class="gap-6 col-span-full row-start-1 row-end-5 scrollbar-none overflow-x-scroll"
        snap="snap-center md:snap-start block"
      >
        {collections?.map((collection) => {
          return (
            <a
              aria-label={collection.slug}
              href={`/tag-heuer/${collection.slug}`}
            >
              <div class="cursor-pointer tracking-widest h-[30px] w-auto whitespace-nowrap font-serif font-semibold uppercase flex flex-col items-center justify-between">
                {collection.nickname}
                <div class="h-[2px] w-[20px] block bg-[#1d1d1b]" />
              </div>
            </a>
          );
        })}
      </Slider>

      <SliderControllerJS rootId={id} />
    </div>
  );
}

function MenuDesktop(props: Props) {
  const { collections } = props.tagHeuerConfig ?? {};

  return (
    <div class="hidden md:flex flex-col gap-2">
      {collections?.map((collection) => {
        return (
          <a
            class="group"
            aria-label={collection.slug}
            href={`/tag-heuer/${collection.slug}`}
          >
            <div class="group cursor-pointer tracking-widest w-auto whitespace-nowrap flex flex-row items-center gap-3">
              <div class="h-[1px] w-[25px] block bg-[#1d1d1b]" />

              <span class="font-arapey uppercase text-[25px] group-hover:text-underline">
                {collection.nickname}
              </span>
            </div>
          </a>
        );
      })}
    </div>
  );
}

function PLP(props: Props) {
  const { tagHeuerConfig, requestViewer, page } = props;
  const slug: string = requestViewer?.context?.params?.slug!;
  const matching = tagHeuerConfig?.collections.find((col) => col.slug === slug);

  if (!slug || !matching) {
    return null;
  }

  return (
    <Container class="sm:max-w-[1170px] py-20 px-0 sm:px-5 flex flex-col md:flex-row gap-12 md:gap-20">
      <div class="w-full md:w-[300px] flex flex-col gap-6 mt-[6px] px-[15px] md:px-0">
        <a href="/" class="text-xs text-[#333] -mt-[35px]">Bergerson Joias</a>
        <img alt="Tag Heuer" src={props.logo} width={190} height={30} />
        <MenuMobile {...props} />
        <MenuDesktop {...props} />
      </div>

      <div class="flex flex-col gap-4">
        <h1 class="text-4xl md:text-6xl ml-[15px] font-arapey text-[#333]">
          {matching.name}
        </h1>

        <div class="text-[#666]">
          <QuillText html={matching.description} />
        </div>

        <SearchResult
          page={page}
          resultsOnly={true}
          columns={{ desktop: 3, mobile: 1 }}
        />
      </div>
    </Container>
  );
}

export default PLP;
