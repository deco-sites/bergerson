import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Link {
  href: string;
  label: string;
}

export interface Props {
  links: Link[];
  background: LiveImage;
  detail: {
    /** @description 532px x 1120px recommended */
    left: LiveImage;
    /** @description 375px x 440px recommended */
    right: LiveImage;
    alt: string;
  };
}

export default function HeroLinks(props: Props) {
  const { links, background, detail } = props;
  const { left, right, alt } = detail;

  const backgroundStyle = {
    backgroundImage: `url('${background}')`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      style={backgroundStyle}
      class="h-[100vh] max-h-[1120px] flex flex-row justify-between items-center relative"
    >
      <div class="h-full md:max-w-[532px] w-full">
        <img
          alt={alt}
          src={left}
          class="h-full max-h-[1120px] w-full md:w-[532px] object-cover"
        />
      </div>

      <ul class="md:mx-12 flex flex-col gap-[20px] flex-1 h-full w-full items-center justify-center absolute md:relative">
        {links.map((link) => {
          return (
            <li class="relative md:h-[39px] md:w-[175px]">
              <a
                href={link.href}
                class="text-white md:text-default hover:font-bold font-serif text-[39px] tracking-wider leading-[39px] md:absolute"
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>

      <div class="md:mx-12 hidden md:block h-full max-h-[440px] w-full max-w-[532px]">
        <img
          alt={alt}
          src={right}
          class="h-full max-h-[440px] max-w-[375px] object-cover"
        />
      </div>
    </div>
  );
}
