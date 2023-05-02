import type { LoaderReturnType } from "$live/types.ts";
import Head from "deco-sites/bergerson/components/head/Head.tsx";
import { canonicalFromBreadcrumblist } from "deco-sites/std/utils/seo.ts";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";
import { Props as HeadProps } from "deco-sites/bergerson/components/head/interface.tsx";

export interface Props {
  page: LoaderReturnType<ProductListingPage | null>;
  head: HeadProps;
}

export default function HeadPLP({ page, head }: Props) {
  const bcList = page?.breadcrumb;

  if (!bcList) {
    const { title, ...headProps } = head;
    const finalTitle = title.replace(":slug", "Resultados da busca");
    return <Head title={finalTitle} {...headProps} />;
  }

  const { title, ...headProps } = head;
  const lastBreadcrumbIndex = bcList.itemListElement.length - 1;
  const lastBreadcrumb = bcList.itemListElement[lastBreadcrumbIndex];
  const lastBcName = lastBreadcrumb?.name ?? "Resultados da busca";
  const finalTitle = title.replace(":slug", lastBcName);
  return <Head title={finalTitle} {...headProps} />;
}
