import type { HTML } from "deco-sites/std/components/types.ts";
import QuillText from "deco-sites/std/components/QuillText.tsx";
import Container from "deco-sites/bergerson/components/ui/Container.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  logo: LiveImage;
  detail: LiveImage;
  text: HTML;
  action: string;
  href: string;
}

export default function MontblancDescription(props: Props) {
  return (
    <div class="bg-black">
      <Container class="py-20 px-5">
        <div class="flex flex-col sm:flex-row gap-8 items-center justify-center sm:items-start">
          <img src={props.detail} alt="Montblanc" class="w-full object-cover" />

          <div class="text-white">
            <img
              class="ml-[14px] mb-[24px] animate-bounce "
              src={props.logo}
              alt="Montblanc"
            />
            <QuillText html={props.text} />

            <div class="mt-8 block">
              <a
                href={props.href}
                class="uppercase ml-[14px] border-1 border-solid border-white py-4 px-6 transition-all bg-transparent hover:(px-8 bg-white text-black)"
              >
                {props.action}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}