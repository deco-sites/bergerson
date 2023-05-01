import type { LoaderReturnType } from "$live/types.ts";
import Head from "deco-sites/bergerson/components/head/Head.tsx";
import { RequestViewer } from "deco-sites/bergerson/functions/requestViewer.ts";
import { Props as HeadProps } from "deco-sites/bergerson/components/head/interface.tsx";
import type { Props as TagHeuerConfig } from "deco-sites/bergerson/sections/TagHeuer.global.tsx";

export interface Props {
  requestViewer?: LoaderReturnType<RequestViewer | null>;
  tagHeuerConfig?: LoaderReturnType<TagHeuerConfig | null>;
  head: HeadProps;
}

export default function TagHeuerHead(props: Props) {
  const { tagHeuerConfig, requestViewer } = props;
  const slug: string = requestViewer?.context?.params?.slug!;
  const matching = tagHeuerConfig?.collections.find((col) => col.slug === slug);
  const { title, ...headProps } = props.head;
  const finalTitle = title.replace(":slug", matching?.name ?? "Tag Heuer");

  if (!slug || !matching) return null;
  return <Head title={finalTitle} {...headProps} />;
}
