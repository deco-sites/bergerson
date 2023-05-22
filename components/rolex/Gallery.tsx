import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Container from "../ui/Container.tsx";

export interface Banner {
  src: LiveImage;
  alt: string;
  label: string;
  description: string;
  href: string;
}

export interface Props {
  images?: Banner[];
}

export default function Gallery({ images = [] }: Props) {
  return (
    <Container>
      <ul class="grid lg:grid-cols-[1fr_1fr_1fr] grid-cols-[1fr_1fr]">
        {images.map((image) => (
          <li class="text-[12px] tracking-[1.2px] leading-[14px] font-helvetica text-[#212121] text-center font-bold">
            <a href={image.href}>
              <img
                src={image.src}
                alt={image.alt}
                width={640}
                height={816}
                class="w-full h-auto"
              />
              <p class="mb-[2px]">{image.label}</p>
              <p>{image.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </Container>
  );
}
