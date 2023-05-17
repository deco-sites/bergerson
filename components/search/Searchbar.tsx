import { useSignal } from "@preact/signals";
import Button from "deco-sites/fashion/components/ui/Button.tsx";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import { useUI } from "deco-sites/fashion/sdk/useUI.ts";
import { sendAnalyticsEvent } from "deco-sites/std/commerce/sdk/sendAnalyticsEvent.ts";
import type { AggregateOffer, Product } from "deco-sites/std/commerce/types.ts";
import type { JSX } from "preact";
import { useEffect, useRef } from "preact/compat";
import { useState } from "preact/hooks";
import { SmartHintSearchResult } from "./SmartHintSearchResult.tsx";
import type { SmarthintResponse } from "./types.ts";

interface ResponseState {
  data: SmarthintResponse | null;
  error: string;
  loading: boolean;
  called: boolean;
}

// Editable props
export interface EditableProps {
  /**
   * @title Placeholder
   * @description Search bar default placeholder message
   * @default What are you looking for?
   */
  placeholder?: string;
}

export type Props = EditableProps;

let timeout: number;
const INITIAL_RESPONSE = {
  data: null,
  error: "",
  loading: false,
  called: false,
} as const;

function Searchbar({
  placeholder = "What are you looking for?",
}: Props) {
  const { displaySearchbar } = useUI();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const orderBy = useSignal(0);
  const page = useSignal(0);
  const [response, setResponse] = useState<ResponseState>(INITIAL_RESPONSE);

  useEffect(() => {
    if (!searchInputRef.current) return;
    searchInputRef.current.focus();
  }, []);

  const debounce = (callback: () => void) => {
    clearTimeout(timeout);
    timeout = setTimeout(callback, 1000);
  };

  const handleOrderBy = (
    event: JSX.TargetedEvent<HTMLSelectElement, Event>,
  ) => {
    orderBy.value = Number(event.currentTarget.value);
    handleSubmit(page.value, true, Number(event.currentTarget.value));
  };

  const handleNextPage = () => {
    page.value = page.value + 1;
    handleSubmit(page.value + 1);
  };

  const handleSubmit = (
    page = 0,
    reset = false,
    orderBy = 0,
  ) => {
    document.body.classList.add("overflow-hidden");
    event?.preventDefault();
    setResponse((state) => ({ ...state, loading: true, called: true }));

    fetch(
      `https://search.smarthint.co/v3/Search/GetPrimarySearch?shcode=SH-448162&term=${searchInputRef.current?.value}&from=${
        page * 12
      }&size=12&searchSort=${orderBy}`,
    ).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        setResponse((state) => ({
          ...state,
          loading: false,
          error: res.statusText,
        }));
      }
    }).then((data: SmarthintResponse) => {
      setResponse((state) => ({
        ...state,
        data: {
          ...data,
          Products: reset
            ? data.Products
            : [...(state.data?.Products ?? []), ...data.Products],
        },
        loading: false,
      }));
    });
  };

  return (
    <div class="flex flex-col flex-grow md:px-16">
      <div class="flex gap-4 justify-center">
        <form
          id="searchbar"
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit(0, true);
            clearTimeout(timeout);
          }}
          class="flex-grow flex px-3 py-[1px] border-b border-default md:max-w-[60%]"
        >
          <Button
            variant="icon"
            onClick={() => {
              console.log("microfone");
            }}
          >
            <Icon
              class="text-subdued"
              id="Microphone"
              width={20}
              height={20}
              strokeWidth={0.01}
            />
          </Button>
          <input
            ref={searchInputRef}
            id="search-input"
            class="flex-grow relative outline-none w-[90%] ml-2 text-[24px] text-[#999]"
            onInput={(e) => {
              const value = e.currentTarget.value;
              debounce(() => handleSubmit(0, true));
              if (value) {
                sendAnalyticsEvent({
                  name: "search",
                  params: { search_term: value },
                });
              }
            }}
            placeholder={placeholder}
            role="combobox"
            aria-controls="search-suggestion"
            autocomplete="off"
          />
          <button
            type="submit"
            aria-label="Pesquisar produtos"
            class="focus:outline-none"
            htmlFor="searchbar"
            tabIndex={-1}
          >
            <Icon
              class="text-subdued"
              id="MagnifyingGlass"
              width={20}
              height={20}
              strokeWidth={0.01}
            />
          </button>
        </form>
        <Button
          variant="icon"
          onClick={() => {
            displaySearchbar.value = false;

            document.body.classList.remove("overflow-hidden");
            setResponse(INITIAL_RESPONSE);
          }}
        >
          <Icon id="XMark" width={20} height={20} strokeWidth={2} />
        </Button>
      </div>
      <SmartHintSearchResult
        open={response.called}
        loading={response.loading}
        searchTerm={searchInputRef.current?.value ?? ""}
        totalResults={response.data?.TotalResult ?? 0}
        onOrderBy={handleOrderBy}
        onNextPage={handleNextPage}
        products={response.data?.Products.map<Product>((prod) => {
          const categories = prod.ProductType.split(" > ");
          const category = categories[categories.length - 1];
          return {
            "@type": "Product" as const,
            category,
            productID: prod.ProductId,
            url: prod.Link.replace("//www.bergersonjoias.com", ""),
            name: prod.Title,
            description: prod.Description,
            brand: prod.Brand,
            sku: prod.Sku,
            gtin: prod.Mpn,
            releaseDate: prod.OfferDate,
            image: [{
              "@type": "ImageObject" as const,
              alternateName: prod.Title,
              url: `https:${prod.ImageLink}`,
            }, {
              "@type": "ImageObject" as const,
              alternateName: prod.Title,
              url: `https:${prod.SecondImageLink}`,
            }],
            offers: prod.Availability === "in stock"
              ? {
                "@type": "AggregateOffer",
                priceCurrency: "BRL",
                highPrice: prod.Price,
                lowPrice: prod.FinalPrice,
                offerCount: 1,
                offers: [{
                  "@type": "Offer",
                  availability: prod.Availability === "in stock"
                    ? "https://schema.org/InStock"
                    : "https://schema.org/OutOfStock",
                  gtin: prod.Mpn,
                  inventoryLevel: { value: 1 },
                  itemCondition: "https://schema.org/NewCondition",
                  price: prod.FinalPrice,
                  priceSpecification: [{
                    "@type": "UnitPriceSpecification",
                    priceComponentType: "https://schema.org/Installment",
                    priceType: "https://schema.org/ListPrice",
                    billingDuration: prod.Installment,
                    billingIncrement: prod.InstallmentAmount,
                    price: prod.FinalPrice,
                  }],
                  seller: "1",
                  sku: prod.Sku,
                }],
              } as AggregateOffer
              : undefined,
          };
        })}
      />
    </div>
  );
}

export default Searchbar;
