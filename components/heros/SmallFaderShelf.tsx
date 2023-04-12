import { useEffect } from "preact/hooks";
import Actionable from "./Actionable.tsx";
import { useSignal } from "@preact/signals";
import { ImageWithAction } from "./types.ts";

interface Props {
  images: ImageWithAction[];
}

/** TIMER PROPERTIES */
let PRODUCT_TIMER: number;
const TIMER_INTERVAL = 1500;

export default function SmallFaderShelf(props: Props) {
  const currentImage = useSignal(0);

  useEffect(() => {
    onChangeImages();
    return () => clearInterval(PRODUCT_TIMER);
  }, [props.images]);

  const onChangeImages = () => {
    if (PRODUCT_TIMER) clearInterval(PRODUCT_TIMER);
    PRODUCT_TIMER = setInterval(changeImage, TIMER_INTERVAL);
  };

  const changeImage = () => {
    const imagesLength = props.images.length - 1;

    if (currentImage.value >= imagesLength) {
      currentImage.value = 0;
      return;
    }

    currentImage.value += 1;
    return;
  };

  return (
    <div class={`w-[200px] h-[200px] bg-white`}>
      {props.images.map((image, imageIndex) => {
        const isActive = imageIndex === currentImage.value;
        const opacityClass = isActive ? "opacity-100 z-10" : "opacity-0";

        return (
          <Actionable action={image.action}>
            <img
              src={image.image}
              alt={image.action?.title}
              class={`h-[200px] w-[200px] object-cover transition ease-in-out duration-1000 absolute ${opacityClass}`}
            />
          </Actionable>
        );
      })}
    </div>
  );
}
