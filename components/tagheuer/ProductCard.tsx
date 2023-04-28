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
      id={`product-card-${productID}`}
      class="w-full group h-full bg-white"
    >
      <a href={url} aria-label="product link" class="h-full flex flex-col">
        <div class="relative w-full bg-white">
          <Image
            width={500}
            src={front.url!}
            preload={preload}
            alt={front.alternateName}
            style={{ aspectRatio: "1 / 1" }}
            loading={preload ? "eager" : "lazy"}
            sizes="(max-width: 640px) 50vw, 20vw"
            class="rounded w-full group-hover:hidden object-contain object-center"
          />
          <Image
            width={500}
            src={back?.url ?? front.url!}
            style={{ aspectRatio: "1 / 1" }}
            sizes="(max-width: 640px) 50vw, 20vw"
            alt={back?.alternateName ?? front.alternateName}
            class="w-full hidden group-hover:block object-contain object-center"
          />
        </div>

        <div class="flex flex-col gap-1 py-2 h-full px-4">
          <span class="text-[16px] uppercase font-heading-1 text-center mb-auto truncate">
            {name}
          </span>

          <div class="py-2 flex items-center justify-center">
            <span class="text-lg">
              {formatPrice(price, offers!.priceCurrency!)}
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProductCard;
