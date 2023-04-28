import Image from "deco-sites/std/components/Image.tsx";
import Text from "deco-sites/fashion/components/ui/Text.tsx";
import { useOffer } from "deco-sites/fashion/sdk/useOffer.ts";
import { formatPrice } from "deco-sites/fashion/sdk/format.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

interface Props {
  product: Product;
  /** Preload card image */
  preload?: boolean;
}

function ProductCard({ product, preload }: Props) {
  const {
    url,
    productID,
    name,
    image: images,
    offers,
  } = product;

  const [front, back] = images ?? [];
  const { price } = useOffer(offers);

  return (
    <div
      data-deco="view-product"
      class="w-full group h-full"
      id={`product-card-${productID}`}
    >
      <a href={url} aria-label="product link" class="h-full flex flex-col">
        <div class="relative w-full">
          <Image
            width={500}
            height={500}
            src={front.url!}
            preload={preload}
            alt={front.alternateName}
            loading={preload ? "eager" : "lazy"}
            sizes="(max-width: 640px) 50vw, 20vw"
            class="rounded w-full group-hover:hidden object-contain"
          />
          <Image
            width={500}
            height={500}
            src={back?.url ?? front.url!}
            sizes="(max-width: 640px) 50vw, 20vw"
            alt={back?.alternateName ?? front.alternateName}
            class="w-full hidden group-hover:block object-contain"
          />
        </div>

        <div class="flex flex-col gap-1 py-2 h-full">
          <span class="text-[16px] uppercase font-heading-1 text-center mb-auto">
            {name}
          </span>

          <div class="py-2 flex items-center justify-between">
            {price && (
              <span class="font-semibold font-serif text-[#585858]">
                10x {formatPrice(price / 10, offers!.priceCurrency!)}
              </span>
            )}
            <span class="text-lg">
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
