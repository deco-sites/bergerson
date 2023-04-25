import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Text from "deco-sites/fashion/components/ui/Text.tsx";
import Button from "deco-sites/fashion/components/ui/Button.tsx";
export interface Props {
  collections: Collection[];
}
export interface Collection {
  title: string;
  image: LiveImage;
  href: string;
  description: string;
  titleButton: string;
}

export default function Collections({ collections }: Props) {
  return (
    <div class="hidden md:flex flex-col items-center justify-center w-full ">
      <div class="grid grid-cols-3 gap-[30px] w-full h-full px-[60px] py-[100px] max-w-[1300px]">
        {collections?.map((collection) => <ItemDesktop {...collection} />)}
      </div>
    </div>
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
      <Text class="h-[245px] w-[85%] text-center text-lg leading-6 font-light text-primary font-sans mb-[15px] overflow-hidden ">
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
    <div>
    </div>
  );
}
