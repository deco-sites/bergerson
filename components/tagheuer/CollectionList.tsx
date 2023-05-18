import type { LoaderReturnType } from "$live/types.ts";
import Container from "deco-sites/fashion/components/ui/Container.tsx";
import type { Props as TagHeuerConfig } from "deco-sites/bergerson/sections/TagHeuer.global.tsx";

export interface Props {
  title: string;
  tagHeuerConfig?: LoaderReturnType<TagHeuerConfig | null>;
}

export default function CollectionList(props: Props) {
  const { collections } = props.tagHeuerConfig ?? {};

  return (
    <Container class="py-20 px-5">
      <h1 class="text-4xl md:text-6xl text-center mb-12 font-arapey text-[#333]">
        {props.title}
      </h1>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-12">
        {collections?.map((collection) => (
          <a
            href={`/tag-heuer/${collection.slug}`}
            aria-label={collection.slug}
            class="group"
          >
            <div class="relative">
              <div
                aria-hidden="true"
                class="group-hover:opacity-100 opacity-0 transition-opacity absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.4)] z-10"
              />
              <div
                aria-hidden="true"
                class="group-hover:(w-3/4 h-3/4) absolute ease-in-out duration-[300ms] transition-[width,height] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[105%] h-[105%] z-20 border-1 border-[rgba(255,255,255,.3)]"
              />
              <div class="flex flex-1 flex-col gap-2 items-center justify-center w-full h-full">
                <img
                  loading="lazy"
                  decoding="async"
                  alt={collection.name}
                  src={collection.avatar}
                  class="w-full h-[410px] object-cover"
                />
              </div>
            </div>
            <p class="uppercase font-serif text-2xl mt-[10px] text-center">
              {collection.nickname}
            </p>
          </a>
        ))}
      </div>
    </Container>
  );
}
