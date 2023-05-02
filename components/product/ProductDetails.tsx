import { useId } from "preact/hooks";
import AddToCartButton from "deco-sites/fashion/islands/AddToCartButton.tsx";
import Container from "deco-sites/fashion/components/ui/Container.tsx";
import Text from "deco-sites/fashion/components/ui/Text.tsx";
import Breadcrumb from "deco-sites/fashion/components/ui/Breadcrumb.tsx";
import Button from "deco-sites/fashion/components/ui/Button.tsx";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import { Slider } from "deco-sites/fashion/components/ui/Slider.tsx";
import SliderJS from "deco-sites/fashion/components/ui/SliderJS.tsx";
import { useOffer } from "deco-sites/fashion/sdk/useOffer.ts";
import { formatPrice } from "deco-sites/fashion/sdk/format.ts";
import type { LoaderReturnType } from "$live/types.ts";
import type { ProductDetailsPage } from "deco-sites/std/commerce/types.ts";
import { useSignal } from "@preact/signals";
import { navbarHeightDesktop } from "../header/constants.ts";
import QuillText from "deco-sites/std/components/QuillText.tsx";
import type { Product } from "deco-sites/std/commerce/types.ts";
import ProductShelf from "deco-sites/fashion/components/product/ProductShelf.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";

export interface Props {
  page: LoaderReturnType<ProductDetailsPage | null>;
  related: LoaderReturnType<Product[] | null>;
  info: {
    description: HTML;
    highlights: Array<{
      image: LiveImage;
      text: string;
    }>;
  };
}

const WIDTH = 500;
const HEIGHT = 500;
const ASPECT_RATIO = `${WIDTH} / ${HEIGHT}`;

/**
 * Rendered when a not found is returned by any of the loaders run on this page
 */
function NotFound() {
  return (
    <div class="w-full flex justify-center items-center py-28">
      <div class="flex flex-col items-center justify-center gap-6">
        <Text variant="heading-2">Página não encontrada</Text>
        <a href="/">
          <Button>Voltar à página inicial</Button>
        </a>
      </div>
    </div>
  );
}

function Prices(
  { page, info }: { page: ProductDetailsPage; info: Props["info"] },
) {
  const { product } = page;
  const { productID, offers } = product;
  const isInstallmentsOpen = useSignal(false);
  const openInstallments =
    () => (isInstallmentsOpen.value = !isInstallmentsOpen.value);

  const {
    price,
    listPrice,
    seller,
    installments,
    allInstallments,
  } = useOffer(offers);

  return (
    <div class="mt-4">
      <div class="flex flex-row gap-2 items-center">
        <Text tone="default" variant="heading-2">
          {formatPrice(price, offers!.priceCurrency!)}
        </Text>
      </div>

      <div class="mt-2 border-1 border-gray-300 relative">
        <div
          onClick={openInstallments}
          class="p-4 flex flex-row justify-between cursor-pointer"
        >
          <Text variant="caption" class="text-sm text-gray-700">
            {installments}
          </Text>

          <Icon id="ChevronDown" width={16} height={16} strokeWidth={2} />
        </div>

        {isInstallmentsOpen.value && (
          <ul class="w-full absolute top-full left-0 border-1 border-gray-300 bg-white pt-4">
            {allInstallments.map((installment) => (
              <li class="p-4 pt-0 text-sm text-gray-700">{installment}</li>
            ))}
          </ul>
        )}
      </div>

      <div class="mt-4 lg:mt-10 flex flex-col py-2.5 border-t-1 border-b-1 border-[#ffd049]">
        {seller && (
          <AddToCartButton
            skuId={productID}
            sellerId={seller}
            price={price ?? 0}
            discount={price && listPrice ? listPrice - price : 0}
            name={product.name ?? ""}
            productGroupId={product.isVariantOf?.productGroupID ?? ""}
          />
        )}
      </div>

      <div class="mt-4 text-sm">
        <p dangerouslySetInnerHTML={{ __html: info.description }} />

        <ul class="flex flex-col gap-3 mt-4">
          {info.highlights.map((highlight) => (
            <li class="flex flex-row gap-4 items-center">
              <img
                width={26}
                height={26}
                alt={highlight.text}
                src={highlight.image}
                class="w-[26px] h-[26px] object-contain"
              />
              {highlight.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ProductInfo(
  { page, info }: { page: ProductDetailsPage; info: Props["info"] },
) {
  const { breadcrumbList, product } = page;
  const { name, gtin } = product;

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        itemListElement={breadcrumbList?.itemListElement.slice(0, -1)}
      />
      {/* Code and name */}
      <div class="mt-4">
        <h1>
          <Text class="font-bold" variant="heading-3">{name}</Text>
        </h1>
        <div>
          <Text tone="subdued" variant="caption">
            Cod. {gtin}
          </Text>
        </div>
      </div>
      {/* Prices */}
      <div class="hidden lg:block">
        <Prices page={page} info={info} />
      </div>
    </>
  );
}

function Details(
  { page, related, info }: {
    page: ProductDetailsPage;
    related: Product[] | null;
    info: Props["info"];
  },
) {
  const id = `product-image-gallery:${useId()}`;
  const { product: { image: images = [] } } = page;
  const maxH = (HEIGHT / WIDTH).toFixed(2);

  return (
    <div
      id={id}
      class={`grid grid-cols-1 gap-4 lg:(grid-cols-[762px_300px] grid-rows-1 justify-center relative`}
    >
      {/* Image Slider */}
      <div class="relative order-2 lg:(col-start-1 col-span-1 row-start-1)">
        <Slider class="gap-6 overflow-x-scroll scrollbar-none">
          {images.map((img, index) => (
            <Image
              class={`scroll-snap-center min-w-[100vw] lg:(min-w-[762px] max-h-[calc(${maxH}*40vw)]) object-contain`}
              sizes="(max-width: 640px) 100vw, 40vw"
              style={{ aspectRatio: ASPECT_RATIO }}
              src={img.url!}
              alt={img.alternateName}
              width={WIDTH}
              height={HEIGHT}
              // Preload LCP image for better web vitals
              preload={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}
        </Slider>

        <div class="hidden lg:block absolute left-2 top-[15vw]">
          <Button variant="icon" data-slide="prev" aria-label="Previous">
            <Icon size={36} id="ChevronLeft" strokeWidth={3} />
          </Button>
        </div>
        <div class="hidden lg:block absolute right-2 top-[15vw]">
          <Button variant="icon" data-slide="next" aria-label="Next">
            <Icon size={36} id="ChevronRight" strokeWidth={3} />
          </Button>
        </div>

        {/* Prices */}
        <div class="block lg:hidden p-4">
          <Prices page={page} info={info} />
        </div>

        <div class="px-4 my-4">
          <div class="p-8 bg-[#f5f5f5] flex flex-col items-center justify-center text-center">
            <span class="font-bold uppercase">Descrição</span>
            <QuillText
              html={`<div class="text-center">${
                page.product.description ?? ""
              }</div>`}
            />
          </div>
        </div>

        {related && (
          <div class="flex flex-col gap-4 px-4">
            <span class="font-bold text-lg uppercase">
              Produtos relacionados
            </span>
            <ProductShelf flat={true} collection={related} />
          </div>
        )}
      </div>

      {/* Product Info */}
      <div
        class={`order-1 px-4 lg:(pr-0 pl-6 col-start-2 col-span-1 row-start-1 sticky top-[${navbarHeightDesktop}] self-start)`}
      >
        <ProductInfo page={page} info={info} />
      </div>

      <SliderJS rootId={id}></SliderJS>
    </div>
  );
}

function ProductDetails({ page, related, info }: Props) {
  return (
    <Container class="py-0 lg:py-10">
      {page
        ? <Details page={page} related={related} info={info} />
        : <NotFound />}
    </Container>
  );
}

export default ProductDetails;
