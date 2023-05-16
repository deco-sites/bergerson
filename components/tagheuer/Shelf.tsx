import { useId } from "preact/hooks";
import { animation, tw } from "twind/css";
import { useSignal } from "@preact/signals";
import ProductCard from "./ProductCard.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import type { Product } from "deco-sites/std/commerce/types.ts";
import Button from "deco-sites/fashion/components/ui/Button.tsx";
import { Slider } from "deco-sites/fashion/components/ui/Slider.tsx";
import SliderControllerJS from "deco-sites/fashion/islands/SliderJS.tsx";
import type { Props as TagHeuerConfig } from "deco-sites/bergerson/sections/TagHeuer.global.tsx";

export interface Props {
  tagHeuerConfig?: LoaderReturnType<TagHeuerConfig | null>;
  products: LoaderReturnType<Product[] | null>;
}

interface ControllerProps {
  activeTab: number;
  changeTab: (n: number) => void;
}

function ShelfControllerMobile(props: Props & ControllerProps) {
  const id = useId() + "shelf-controller-mobile";
  const { collections } = props.tagHeuerConfig ?? {};

  return (
    <div
      id={id}
      class="block md:hidden grid grid-cols-[1fr] grid-rows-[30px] mb-12"
    >
      <Slider
        class="gap-6 col-span-full row-start-1 row-end-5 scrollbar-none overflow-x-scroll"
        snap="snap-center md:snap-start block"
      >
        {collections?.map((collection, index) => {
          const isActive = index === props.activeTab;
          const markerSize = isActive ? "4px" : "2px";

          return (
            <div onClick={() => props.changeTab(index)}>
              <div class="cursor-pointer tracking-widest h-[30px] w-auto whitespace-nowrap font-serif font-semibold uppercase flex flex-col items-center justify-between">
                <span class={isActive ? "opacity-100" : "opacity-50"}>
                  {collection.nickname}
                </span>

                <div class={`h-[${markerSize}] w-[20px] block bg-[#1d1d1b]`} />
              </div>
            </div>
          );
        })}
      </Slider>

      <SliderControllerJS rootId={id} />
    </div>
  );
}

function ShelfControllerDesktop(props: Props & ControllerProps) {
  const { collections } = props.tagHeuerConfig ?? {};
  const activeCollection = collections?.find((_, i) => i === props.activeTab);

  const increaseFont = animation("0.5s ease forwards", {
    "from": { fontSize: "25px" },
    "to": { fontSize: "40px" },
  });

  const increaseMargin = animation("0.5s ease forwards", {
    "from": { marginLeft: "0px" },
    "to": { marginLeft: "-38px" },
  });

  const decreaseFont = animation("0.5s ease forwards", {
    "from": { fontSize: "40px" },
    "to": { fontSize: "25px" },
  });

  const decreaseMargin = animation("0.5s ease forwards", {
    "from": { marginLeft: "-38px" },
    "to": { marginLeft: "0px" },
  });

  return (
    <div class="hidden md:flex flex-col min-w-[300px] ml-[38px]">
      {collections?.map((collection, index) => {
        const isActive = index === props.activeTab;
        const offset = isActive ? "-ml-[38px]" : "";
        const fontSize = isActive ? "40px" : "25px";
        const leading = isActive ? "60px" : "45px";
        const color = isActive ? "#1d1d1b" : "#c8c8c8";
        const fontAnimation = isActive ? increaseFont : decreaseFont;
        const marginAnimation = isActive ? increaseMargin : decreaseMargin;

        return (
          <div
            class={tw`${offset} transition-all text-[${color}] hover:text-[#666] ${marginAnimation}`}
            onClick={() => props.changeTab(index)}
          >
            <div class="group cursor-pointer tracking-widest w-auto whitespace-nowrap flex flex-row items-center gap-3">
              <div class="h-[1px] w-[25px] block bg-[#1d1d1b] relative group-hover:left-[5px] left-0 transition-all" />

              <span
                class={tw`font-arapey uppercase text-[${fontSize}] leading-[${leading}] ${fontAnimation}`}
              >
                {collection.nickname}
              </span>
            </div>
          </div>
        );
      })}

      <div class="mt-[60px] w-min">
        <a
          href={`/tag-heuer/${activeCollection?.slug}`}
          class="block whitespace-nowrap border-1 border-solid border-[#292929] text-[#606060] rounded-full py-3 px-6 hover:text-underline"
        >
          Conheça a coleção
        </a>
      </div>
    </div>
  );
}

export default function TagHeuerShelf(props: Props) {
  const id = useId() + "shelf-area";
  const { products, tagHeuerConfig } = props;
  const { collections } = tagHeuerConfig ?? {};

  const activeTab = useSignal(0);
  const onChange = (n: number) => (activeTab.value = n);
  const controllerProps = { activeTab: activeTab.value, changeTab: onChange };
  const activeCollection = collections?.find((_, i) => i === activeTab.value);
  console.log(products?.length);
  const collectionProducts = products?.filter((product) => {
    const addProperties = product.additionalProperty ?? [];
    const clusters = addProperties.filter((add) => add.name === "cluster");
    const clustersIds = clusters.map((cluster) => cluster.propertyID);
    console.log(activeCollection?.clusterId);
    return clustersIds.includes(activeCollection?.clusterId.toString());
  });

  return (
    <div class="bg-[#fafafa] relative py-20">
      <div class="md:max-w-[1500px] mx-auto px-5 flex flex-col md:flex-row">
        <div class="flex flex-col md:flex-row gap-8 items-center justify-center md:items-start relative z-10">
          {/* controllers */}
          <ShelfControllerMobile {...props} {...controllerProps} />
          <ShelfControllerDesktop {...props} {...controllerProps} />
        </div>
      </div>

      <div class="flex flex-col md:(absolute flex-row) h-full flex-1 w-full top-0 z-0 items-center">
        <div class="flex flex-1" />

        <div class="flex flex-1 md:(h-[420px] -ml-[620px])">
          <div
            id={id}
            class="grid grid-cols-1 grid-rows-[1fr_64px] md:(grid-cols-[420px_1fr])"
          >
            <a
              aria-label={activeCollection?.slug}
              href={`/tag-heuer/${activeCollection?.slug}`}
            >
              <img
                loading="lazy"
                decoding="async"
                alt={activeCollection?.name}
                src={activeCollection?.inspiration}
                class="hidden md:(block w-[420px] h-[420px] object-cover)"
              />
            </a>

            <Slider
              class="gap-6 col-start-1 row-start-1 md:(col-start-2 row-start-1 row-end-1) overflow-x-scroll scrollbar-none"
              snap="snap-center sm:snap-start flex flex-1 h-full first:pl-6 last:pr-6 sm:last:pr-0"
            >
              {collectionProducts?.map((product) => (
                <div class="min-w-[270px] max-w-[270px] md:min-w-[292px] md:max-w-[292px]">
                  <ProductCard product={product} preload={false} />
                </div>
              ))}
            </Slider>

            {/** CONTROLS DESKTOP */}
            <div class="flex flex-row gap-4 items-center justify-center col-start-1 row-start-2 md:col-start-2">
              <div class="bg-interactive-inverse border-black border h-10 w-10 rounded-full">
                <Button
                  class="h-10 w-10"
                  variant="icon"
                  data-slide="prev"
                  aria-label="Previous item"
                >
                  <Icon
                    size={16}
                    id="ChevronLeft"
                    strokeWidth={3}
                    class="text-black"
                  />
                </Button>
              </div>
              <div class="bg-interactive-inverse border-black border h-10 w-10 rounded-full">
                <Button
                  class="h-10 w-10"
                  variant="icon"
                  data-slide="next"
                  aria-label="Next item"
                >
                  <Icon
                    size={16}
                    id="ChevronRight"
                    strokeWidth={3}
                    class="text-black"
                  />
                </Button>
              </div>
            </div>

            <SliderControllerJS rootId={id} />
          </div>
        </div>
      </div>
    </div>
  );
}
