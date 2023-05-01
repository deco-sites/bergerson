import type { LoaderReturnType } from "$live/types.ts";
import Container from "deco-sites/fashion/components/ui/Container.tsx";
import { RequestViewer } from "deco-sites/bergerson/functions/requestViewer.ts";

export interface Config {
  /** @description RegExp to enable this banner on the current URL. Use /feminino/* to display this banner on feminino category  */
  matcher: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

export interface Props {
  requestViewer?: LoaderReturnType<RequestViewer | null>;
  configs: Config[];
}

function CollectionLink(props: Config) {
  return (
    <Container class="px-4 pt-10 flex flex-col gap-12">
      <ul class="flex gap-6 flex-col lg:flex-row flex-wrap items-center justify-center">
        {props.links.map((category) => (
          <li>
            <a
              href={category.href}
              class="font-serif font-bold text-xl lg:text-2xl text-gray-500 hover:text-black"
            >
              {category.label}
            </a>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default function CollectionLinks(props: Props) {
  const { configs, requestViewer } = props;

  if (!requestViewer) {
    return null;
  }

  const url = new URL(requestViewer.request.url);
  const pathname = url.pathname.toLocaleLowerCase();
  const matching = configs.find(({ matcher }) => matcher === pathname);

  if (!matching) return null;
  return <CollectionLink {...matching} />;
}
