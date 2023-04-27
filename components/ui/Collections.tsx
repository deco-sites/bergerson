import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Text from "deco-sites/fashion/components/ui/Text.tsx";
import { Slider } from "deco-sites/fashion/components/ui/Slider.tsx";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import Container from "deco-sites/fashion/components/ui/Container.tsx";
import Button from "deco-sites/fashion/components/ui/Button.tsx";
import SliderControllerJS from "deco-sites/fashion/islands/SliderJS.tsx";
import { useId } from "preact/hooks";
export interface Props {
  collections: Collection[];
  interval?: number;
}
export interface Collection {
  title: string;
  image: LiveImage;
  href: string;
  description: string;
  titleButton: string;
}

export default function Collections({ collections, interval }: Props) {
  const id = useId();
  return (
    <>
      {/* Desktop */}
      <div class="hidden md:flex flex-col items-center justify-center w-full ">
        <div class="grid grid-cols-3 gap-[30px] w-full h-full px-[60px] py-[100px] max-w-[1300px]">
          {collections?.map((collection) => <ItemDesktop {...collection} />)}
        </div>
      </div>
      {/* Mobile */}
      <Container
        id={id}
        class="md:hidden grid grid-cols-[40px_1fr_40px] grid-rows-[1fr_1fr_26px_1fr] w-full "
      >
        <Slider class=" gap-6 col-span-full row-start-1 row-end-5 scrollbar-none">
          {collections?.map((collection) => (
            <div class="w-[100vw] flex items-center justify-center">
              <ItemMobile {...collection} />
            </div>
          ))}
        </Slider>

        <>
          <div class="  relative sm:block z-10 col-start-1 row-start-3 w-[15px] h-[26px]">
            <div class="absolute right-1/2 w-[15px] h-[26px]">
              <Button
                variant="icon"
                data-slide="prev"
                aria-label="Previous item"
              >
                <Icon width={36} height={36} strokeWidth={2} id="ChevronLeft" />
              </Button>
            </div>
          </div>
          <div class=" relative sm:block z-10 col-start-3 row-start-3 w-[15px] h-[26px]">
            <div class="absolute left-1/2  w-[15px] h-[26px]">
              <Button variant="icon" data-slide="next" aria-label="Next item">
                <Icon
                  width={36}
                  height={36}
                  strokeWidth={2}
                  id="ChevronRight"
                />
              </Button>
            </div>
          </div>
        </>

        <SliderControllerJS rootId={id} />
      </Container>
    </>
  );
}

function ItemDesktop(
  { title, image, description, titleButton, href }: Collection,
) {
  return (
    <div class="flex flex-col items-center justify-center max-w-[373px] max-h-[816px]  ">
      <Image
        src={image}
        alt={title}
        height={535}
        width={454}
        class="w-full 
          object-contain
          "
      />
      <Text class="mt-5 mb-2.5 font-serif font-bold text-3xl ">
        {title}
      </Text>
      <Text class="h-[240px] w-[85%] text-center text-base leading-6 font-light text-primary font-mont mb-[15px] overflow-hidden ">
        {description}
      </Text>
      <div class="mx-[15px] border-y-1 w-full flex flex-row justify-center border-primary p-2.5">
        <Button variant="quaternary" href={href} class="">
          {titleButton}
        </Button>
      </div>
    </div>
  );
}
function ItemMobile(
  { title, image, description, titleButton, href }: Collection,
) {
  return (
    <div class="flex flex-col items-center justify-center w-full  ">
      <Image
        src={image}
        alt={title}
        height={535}
        width={454}
        class=" 
        object-cover
        max-w-[454px]
        w-full
        max-h-[439px]
        "
      />
      <Text class="mt-5 mb-2.5 font-serif font-bold text-3xl ">
        {title}
      </Text>
      <Text class="h-[245px] w-[85%] text-center text-base leading-6 font-light text-primary font-mont mb-[15px] overflow-hidden ">
        {description}
      </Text>
      <div class="mx-[15px] border-y-1 w-full flex flex-row justify-center border-primary p-2.5">
        <Button variant="quaternary" href={href} class="">
          {titleButton}
        </Button>
      </div>
    </div>
  );
}
