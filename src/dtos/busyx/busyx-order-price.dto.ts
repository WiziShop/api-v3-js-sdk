export interface BusyXOrderPriceDto {
  total_price_tax_included: number;
  total_price_tax_excluded: number;
  shipping_price: number;
  products: BusyXProductPriceDto[];
}

interface BusyXProductPriceDto {
  unit_price_tax_included: number;
  unit_price_tax_excluded: number;
  quantity: number;
  tax: number;
}
