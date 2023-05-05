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
      <Container class="sm:max-w-[1070px] py-20 px-5">
        <div class="flex flex-col sm:flex-row gap-8 items-center justify-center sm:items-start">
          <img
            width={334}
            height={274}
            alt="Montblanc"
            src={props.detail}
            class="w-full object-cover"
          />

          <div class="text-white">
            <img
              width={377}
              height={71}
              alt="Montblanc"
              src={props.logo}
              class="ml-[14px] mb-[24px] animate-bounce"
            />

            <div class="font-montblanc font-light text-[#a2a2a2] text-[15px] opacity-80">
              <QuillText html={props.text} />
            </div>

            <div class="mt-8 block">
              <a
                href={props.href}
                class="font-montblanc font-light text-[15px] uppercase ml-[13px] border-1 border-solid border-white py-3 px-4 transition-all bg-transparent hover:(px-8 bg-white text-black)"
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
