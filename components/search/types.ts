export interface SmarthintResponse {
  SearchId: string;
  SearchTerm: string;
  Key: string;
  Anonymous: string;
  Date: string;
  SearchTime: number;
  PosProcessTime: number;
  TotalResult: number;
  Products: Product[];
  Filters: unknown[];
  Sorts: Sort[];
  Suggest: unknown[];
  IsRedirect: boolean;
  QuantityFilterShow: number;
  QuantityFilterOptionShow: number;
  Success: boolean;
  Banners: unknown[];
  QuickFilters: unknown;
  Personalized: boolean;
  SearchAtributes: unknown;
}

export interface Sort {
  Value: number;
  Field: string;
  IsAscending: boolean;
  Show: string;
  Checked: string;
  Active: boolean;
  Sort: number;
  MultiValue: boolean;
}

export interface Product {
  Id: string;
  Title: string;
  Description: string;
  Price: number;
  SalePrice: number;
  Availability: string;
  ProductId: string;
  ItemGroupId: string;
  ProductType: string;
  Key: string;
  Date: string;
  Link: string;
  Installment: number;
  InstallmentAmount: number;
  Categories: string[];
  Variations: unknown[];
  ImageLink: string;
  Condition: string;
  Brand: string;
  Mpn: string;
  MpnFather: string;
  Tags: string[];
  Sku: string;
  SecondInstallment: number;
  SecondInstallmentAmount: number;
  PromotionDiscount: number;
  AdicionalImageLink: string[];
  BankSlipPrice: number;
  CreatedDate: string;
  UpdatedDate: string;
  Offer: boolean;
  OfferDate: string;
  LowerPrice: boolean;
  LowerPriceDate: string;
  HasInterest: boolean;
  IsBlacklisted: boolean;
  UponRequest: boolean;
  ImageLinkSmall: string;
  SellsCount: number;
  ViewsCount: number;
  HasPromotion: boolean;
  PriceInteger: string;
  PriceDecimal: string;
  HasSalePrice: boolean;
  SalePriceInteger: string;
  SalePriceDecimal: string;
  HasBankSlipPrice: boolean;
  BankSlipPriceInteger: string;
  BankSlipPriceDecimal: string;
  HasInstallment: boolean;
  InstallmentAmountInteger: string;
  InstallmentAmountDecimal: string;
  HasSecondInstallment: boolean;
  SecondInstallmentAmountInteger: string;
  SecondInstallmentAmountDecimal: string;
  HasAdditionalTag: boolean;
  HasDiscount: boolean;
  Discount: number;
  SecondImageLink: string;
  FirstCategory: string;
  LastCategory: string;
  FinalPrice: number;
  BlockedRecommendation: boolean;
  BlockedOverlay: boolean;
  BlockedSearch: boolean;
  BlockedHotsite: boolean;
  ProductFilters: unknown[];
  AditionalFeatures: AditionalFeatures;
  AditionalFeatures2: AditionalFeatures2[];
  VariationsNew: VariationsNew[];
  CustomWeight: number;
  StockDate: string;
  IndexName: string;
  ReviewStars: number;
  isHighlightProduct: boolean;
}

export interface VariationsNew {
  sku: string;
  productId: string;
  mpn: string;
  mpnFather: string;
  variations: unknown[];
}

export interface AditionalFeatures2 {
  Key: string;
  Value: string;
}

export interface AditionalFeatures {
  additionalTag: string;
  addToCartLink: string;
  "Cor da Pulseira": string;
  "Cor do Mostrador": string;
  "g:condition": string;
  "Gênero": string;
  Marca: string;
  "Material da Pulseira": string;
  "Material do Visor": string;
  Mecanismo: string;
  sellerId: string;
  "Tamanho da Caixa": string;
  "highlights-216"?: string;
}
