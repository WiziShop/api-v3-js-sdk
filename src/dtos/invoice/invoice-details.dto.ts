export interface InvoiceDetailsDto {
  id: number;
  account_id: number;
  group_id: number;
  shop_id: number;
  type: string;
  title: string;
  description: string;
  total_price_tax_excluded: number;
}
