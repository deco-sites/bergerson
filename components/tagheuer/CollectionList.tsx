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
      <h1 class="text-4xl md:text-6xl text-center mb-12">
        {props.title}
      </h1>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-12">
        {collections?.map((collection) => (
          <a href={`/tag-heuer/${collection.slug}`}>
            <div class="flex flex-1 flex-col gap-2 items-center justify-center w-full h-full">
              <img
                alt={collection.name}
                src={collection.avatar}
                class="w-full h-[410px] object-cover"
              />

              <span class="uppercase font-serif text-2xl">
                {collection.nickname}
              </span>
            </div>
          </a>
        ))}
      </div>
    </Container>
  );
}
