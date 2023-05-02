import type {
  AggregateOffer,
  UnitPriceSpecification,
} from "deco-sites/std/commerce/types.ts";

import { formatPrice } from "deco-sites/fashion/sdk/format.ts";

const bestInstallment = (
  acc: UnitPriceSpecification | null,
  curr: UnitPriceSpecification,
) => {
  if (curr.priceComponentType !== "https://schema.org/Installment") {
    return acc;
  }

  if (!acc) {
    return curr;
  }

  if (acc.price > curr.price) {
    return curr;
  }

  if (acc.price < curr.price) {
    return acc;
  }

  if (
    acc.billingDuration && curr.billingDuration &&
    acc.billingDuration < curr.billingDuration
  ) {
    return curr;
  }

  return acc;
};

const makeUnique = (_acc: string[], curr: string | undefined) => {
  const acc = _acc ?? [];
  if (!curr || curr === "") return acc;
  const exists = acc.find((v) => v === curr);

  if (!exists) return [...acc, curr];
  return acc;
};

const getAllInstallments = (
  installments?: UnitPriceSpecification[],
  sellingPrice?: number,
  priceCurrency?: string,
) => {
  const installmentValues = installments?.map((installment) => {
    if (installment.priceComponentType !== "https://schema.org/Installment") {
      return undefined;
    }

    return installmentToString(installment, sellingPrice ?? 0, priceCurrency);
  }) ?? [];

  return installmentValues.reduce(makeUnique, []);
};

const installmentToString = (
  installment: UnitPriceSpecification,
  sellingPrice: number,
  priceCurrency?: string,
) => {
  const { billingDuration, billingIncrement, price } = installment;

  if (!billingDuration || !billingIncrement) {
    return "";
  }

  const withTaxes = sellingPrice < price;
  const installmentValue = formatPrice(billingIncrement, priceCurrency!);

  return `${billingDuration}x de ${installmentValue} ${
    withTaxes ? "com juros" : "sem juros"
  }`;
};

export const useOffer = (aggregateOffer?: AggregateOffer) => {
  const offer = aggregateOffer?.offers[0];
  const listPrice = offer?.priceSpecification.find((spec) =>
    spec.priceType === "https://schema.org/ListPrice"
  );
  const installment = offer?.priceSpecification.reduce(bestInstallment, null);
  const seller = offer?.seller;
  const price = offer?.price;
  const priceCurrency = aggregateOffer?.priceCurrency;

  return {
    price,
    listPrice: listPrice?.price,
    seller,
    installments: installment && price
      ? installmentToString(installment, price, priceCurrency)
      : null,
    allInstallments: getAllInstallments(
      offer?.priceSpecification,
      price,
      priceCurrency,
    ),
  };
};
