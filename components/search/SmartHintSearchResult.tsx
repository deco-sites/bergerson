import Spinner from "deco-sites/bergerson/components/ui/Spinner.tsx";
import type { Product } from "deco-sites/std/commerce/types.ts";
import { useLayoutEffect } from "preact/hooks";
import type { JSX } from "preact";
import ProductGallery from "../product/ProductGallery.tsx";
import Button from "../ui/Button.tsx";
import Container from "../ui/Container.tsx";

export interface Props {
  open: boolean;
  products?: Product[];
  loading: boolean;
  searchTerm: string;
  totalResults: number;
  onOrderBy: (event: JSX.TargetedEvent<HTMLSelectElement, Event>) => void;
  onNextPage: () => void;
}

export function SmartHintSearchResult(
  { products, open, loading, searchTerm, totalResults, onOrderBy }: Props,
) {
  return (
    <div
      class={`${
        open
          ? "visible z-50 opacity-100 w-full md:override:h-[calc(100vh-135px)] h-[calc(100vh-50px)]"
          : "invisible -z-50 opacity-0 h-0 w-0"
      } fixed md:override:top-[130px] top-[50px] left-0 transition-all duration-[200ms] ease-in-out bg-white overflow-auto border-t-1 border-[#e5e5e5] pt-[15px]`}
    >
      <Container class="flex flex-col h-full px-[30px]">
        <div class="flex flex-col md:override:(flex-row justify-between) items-center justify-center gap-10 mb-[15px]">
          <p class="text-[14px] leading-[20px] font-light text-[#1b1b1b]">
            Foram encontrados {totalResults} resultados para a busca por{" "}
            {searchTerm}
          </p>
          <div class="flex gap-1 text-[14px] items-center">
            <span class="hidden md:override:block font-bold">
              Ordernar por:
            </span>
            <select
              class="border-1 border-[#ddd] text-[#999] md:override:text-left text-center md:override:rounded py-[6px]"
              onChange={onOrderBy}
              defaultValue="0"
            >
              <option value="0">Relevância</option>
              <option value="1">Menor preço</option>
              <option value="2">Maior preço</option>
              <option value="3">Ordem alfabética A-Z</option>
              <option value="4">Ordem alfabética Z-A</option>
              <option value="5">Mais Recentes</option>
              <option value="6">Mais Vendidos</option>
              <option value="7">Mais Vistos</option>
              <option value="8">Maior Desconto</option>
            </select>
          </div>
        </div>
        <div class="flex-1 h-auto">
          {products && !loading
            ? (
              <ProductGallery
                products={products}
                columns={{
                  mobile: 2,
                  desktop: 4,
                }}
              />
            )
            : (
              <div class="flex items-center justify-center h-full w-full">
                <Spinner size={50} />
              </div>
            )}
        </div>
        <div class="text-center mt-[40px] pb-[50px]">
          <Button class="w-[250px] text-[18px] font-semibold text-white py-[12px] uppercase override:h-auto">
            Ver Mais
          </Button>
        </div>
      </Container>
    </div>
  );
}
