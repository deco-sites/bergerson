import type { LoaderReturnType } from "$live/types.ts";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import { RequestViewer } from "deco-sites/bergerson/functions/requestViewer.ts";
import type { Props as TagHeuerConfig } from "deco-sites/bergerson/sections/TagHeuer.global.tsx";

export interface Props {
  tagHeuerConfig?: LoaderReturnType<TagHeuerConfig | null>;
  requestViewer?: LoaderReturnType<RequestViewer | null>;
}

function Banner(props: Props) {
  const { tagHeuerConfig, requestViewer } = props;
  const slug: string = requestViewer?.context?.params?.slug!;
  const matching = tagHeuerConfig?.collections.find((col) => col.slug === slug);

  if (!slug || !matching) {
    return null;
  }

  return (
    <div class="grid grid-cols-1 grid-rows-1">
      <Picture preload class="col-start-1 col-span-1 row-start-1 row-span-1">
        <Source
          width={360}
          src={matching.banner.mobile}
          media="(max-width: 767px)"
        />
        <Source
          width={1440}
          src={matching.banner.desktop}
          media="(min-width: 767px)"
        />
        <img class="w-full" src={matching.banner.desktop} alt={matching.name} />
      </Picture>
    </div>
  );
}

export default Banner;
