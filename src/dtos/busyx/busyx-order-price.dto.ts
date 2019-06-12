export interface BusyXOrderPriceDto {
  total_price_tax_included: number;
  total_price_tax_excluded: number;
  shipping_price: number;
  products: BusyXProductPriceDto[];
}

interface BusyXProductPriceDto {
  price_tax_included: number;
  price_tax_excluded: number;
  tax: number;
}
