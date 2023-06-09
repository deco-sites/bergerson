import type { HTML } from "deco-sites/std/components/types.ts";
import QuillText from "deco-sites/std/components/QuillText.tsx";
import Container from "deco-sites/fashion/components/ui/Container.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  logo: LiveImage;
  images: LiveImage[];
  title: string;
  description: HTML;
}

export default function Description(props: Props) {
  return (
    <div class="relative overflow-hidden py-20 md:mt-[120px] flex flex-col items-center justify-center">
      <div class="w-[265px] h-[44px]">
        <img
          width={398}
          height={66}
          src={props.logo}
          alt={props.title}
          class="w-full h-full"
        />
      </div>

      <Container class="mt-20 px-5 sm:max-w-[1500px] text-[#333]">
        <h1 class="ml-[15px] text-4xl md:text-6xl mb-8 font-arapey">
          {props.title}
        </h1>

        <div class="flex flex-col lg:flex-row gap-8">
          <div class="text-[16px] font-mont w-full lg:w-[40%] text-[#333]">
            <QuillText html={props.description} />
          </div>

          <div class="flex flex-1 p-[15px]">
            <div class="flex flex-row gap-4 lg:(absolute w-full)">
              {props.images.map((image) => (
                <div class="flex flex-1 w-full max-w-[348px] h-full">
                  <img
                    src={image}
                    width={348}
                    height={348}
                    loading="lazy"
                    decoding="async"
                    alt={props.title}
                    class="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
