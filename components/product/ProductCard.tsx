import Image from "deco-sites/std/components/Image.tsx";
import Text from "deco-sites/fashion/components/ui/Text.tsx";
import { useOffer } from "deco-sites/fashion/sdk/useOffer.ts";
import { formatPrice } from "deco-sites/fashion/sdk/format.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

interface Props {
  product: Product;
  /** Preload card image */
  preload?: boolean;
  largeImage?: boolean;
}

function ProductCard({ product, preload, largeImage }: Props) {
  const {
    url,
    productID,
    name,
    image: images,
    offers,
  } = product;

  const [front, back] = images ?? [];
  const { price } = useOffer(offers);
  const imageWidth = largeImage ? "" : `max-w-[220px]`;

  return (
    <div
      data-deco="view-product"
      class="w-full group h-full"
      id={`product-card-${productID}`}
    >
      <a href={url} aria-label="product link" class="h-full flex flex-col">
        <div
          class={`relative w-full bg-white ${imageWidth} self-center grid grid-cols-1`}
        >
          <Image
            width={500}
            src={front.url!}
            preload={preload}
            alt={front.alternateName}
            style={{ aspectRatio: "1 / 1" }}
            loading={preload ? "eager" : "lazy"}
            sizes="(max-width: 640px) 50vw, 20vw"
            class="col-start-1 row-start-1 rounded w-full group-hover:opacity-0 opacity-100 object-contain object-center transition ease-in-out duration-500"
          />
          <Image
            width={500}
            src={back?.url ?? front.url!}
            style={{ aspectRatio: "1 / 1" }}
            sizes="(max-width: 640px) 50vw, 20vw"
            alt={back?.alternateName ?? front.alternateName}
            class="col-start-1 row-start-1 w-full opacity-0 group-hover:opacity-100 object-contain object-center transition ease-in-out duration-500"
          />
        </div>

        <div class="flex flex-col gap-1 py-2 h-full">
          <span class="text-[15px] uppercase font-heading-1 text-center mb-auto">
            {name}
          </span>

          <div class="py-2 flex items-center justify-between">
            {price && (
              <span class="font-semibold font-serif text-[#585858]">
                10x {formatPrice(price / 10, offers!.priceCurrency!)}
              </span>
            )}
            <span class="text-[15px]">
              {formatPrice(price, offers!.priceCurrency!)}
            </span>
          </div>

          <button class="uppercase py-2.5 border-t-1 border-b-1 border-[#ffd049] mt-2 text-lg font-bold">
            Comprar
          </button>
        </div>
      </a>
    </div>
  );
}

export default ProductCard;
