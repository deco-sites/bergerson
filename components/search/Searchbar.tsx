/**
 * We use a custom route at /s?q= to perform the search. This component
 * redirects the user to /s?q={term} when the user either clicks on the
 * button or submits the form. Make sure this page exists in deco.cx/admin
 * of yout site. If not, create a new page on this route and add the appropriate
 * loader.
 *
 * Note that this is the most performatic way to perform a search, since
 * no JavaScript is shipped to the browser!
 */

import { useEffect, useRef } from "preact/compat";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import Text from "deco-sites/fashion/components/ui/Text.tsx";
import Button from "deco-sites/fashion/components/ui/Button.tsx";
import ProductCard from "deco-sites/fashion/components/product/ProductCard.tsx";
import { Slider } from "deco-sites/fashion/components/ui/Slider.tsx";
import { useAutocomplete } from "deco-sites/std/commerce/vtex/hooks/useAutocomplete.ts";
import { useUI } from "deco-sites/fashion/sdk/useUI.ts";
import { sendAnalyticsEvent } from "deco-sites/std/commerce/sdk/sendAnalyticsEvent.ts";
import type { Product, Suggestion } from "deco-sites/std/commerce/types.ts";

import SearchTermList from "./SearchTermList.tsx";

function CloseButton() {
  const { displaySearchbar } = useUI();

  return (
    <Button
      variant="icon"
      onClick={() => (displaySearchbar.value = false)}
    >
      <Icon id="XMark" width={20} height={20} strokeWidth={2} />
    </Button>
  );
}

// Editable props
export interface EditableProps {
  /**
   * @title Placeholder
   * @description Search bar default placeholder message
   * @default What are you looking for?
   */
  placeholder?: string;
  /**
   * @title Page path
   * @description When user clicks on the search button, navigate it to
   * @default /s
   */
  action?: string;
  /**
   * @title Term name
   * @description Querystring param used when navigating the user
   * @default q
   */
  name?: string;
  /**
   * TODO: Receive querystring from parameter in the server-side
   */
  query?: string;
}

export type Props = EditableProps & {
  /**
   * @title Product suggestions
   * @description Product suggestions displayed on searchs
   */
  products?: Product[] | null;
  suggestions?: Suggestion | null;
};

function Searchbar({
  placeholder = "What are you looking for?",
  action = "/s",
  name = "q",
  query,
  products,
  suggestions: _suggestions,
}: Props) {
  const searches = _suggestions?.searches;
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { setSearch, suggestions } = useAutocomplete();

  useEffect(() => {
    if (!searchInputRef.current) {
      return;
    }

    searchInputRef.current.focus();
  }, []);

  const hasSuggestions = !!suggestions.value;
  const emptySuggestions = suggestions.value?.searches?.length === 0;
  const _products = suggestions.value?.products &&
      suggestions.value?.products?.length !== 0
    ? suggestions.value.products
    : products;

  return (
    <div class="flex flex-col flex-grow md:px-16 px-3">
      <div class="flex gap-4">
        <form
          id="searchbar"
          action={action}
          class="flex-grow flex  px-3 py-[1px]  border-b border-default"
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
            class="flex-grow
              relative
            outline-none 
              w-[90%]
            "
            name={name}
            defaultValue={query}
            onInput={(e) => {
              const value = e.currentTarget.value;
              console.log(suggestions?.value);
              if (value) {
                sendAnalyticsEvent({
                  name: "search",
                  params: { search_term: value },
                });
              }

              setSearch(value);
            }}
            placeholder={placeholder}
            role="combobox"
            aria-controls="search-suggestion"
            autocomplete="off"
          />
          <Button
            variant="icon"
            aria-label="Search"
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
          </Button>
        </form>
        <CloseButton />
      </div>
      <div class="flex  absolute gap-6 divide-default mt-6  flex-row divide-y-0">
        {
          /*  {searches && searches.length > 0 && !hasSuggestions && (
          <SearchTermList title="Mais buscados" terms={searches} />
        )}
         {hasSuggestions && !emptySuggestions && (
          <SearchTermList
            id="search-suggestion"
            title="Sugestões"
            terms={suggestions.value?.searches ?? []}
          />
        )}
        {hasSuggestions && emptySuggestions && (
          <div class="py-16 md:(py-6!) flex flex-col gap-4 w-full">
            <Text
              variant="heading-3"
              class="text-center"
              role="heading"
              aria-level={3}
            >
              Nenhum resultado encontrado
            </Text>
            <Text variant="body" tone="subdued" class="text-center">
              Vamos tentar de outro jeito? Verifique a ortografia ou use um
              termo diferente
            </Text>
          </div>
        )}
         {_products && !emptySuggestions && (
          <div class="flex flex-col pt-6 md:pt-0 gap-6 overflow-x-hidden">
            <Text class="px-4" variant="heading-3">Produtos sugeridos</Text>
            <Slider>
              {_products.map((
                product,
                index,
              ) => (
                <div
                  class={`${
                    index === 0
                      ? "ml-4"
                      : index === _products.length - 1
                      ? "mr-4"
                      : ""
                  } min-w-[200px] max-w-[200px]`}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </Slider>
          </div>
        )} */
        }
      </div>
    </div>
  );
}

export default Searchbar;
