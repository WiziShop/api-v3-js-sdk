export interface OrderAdvantageDto {
  id: number;
  id_shop: number;
  id_com: number;
  public_id_com: string;
  id_client: number;
  created_at: string;
  custom_text: string;
  total_amount: number;
  id_legal?: number;
  orderAdvantageDetails?: OrderAdvantageDetailDto[];
}

export interface OrderAdvantageDetailDto {
  id: number;
  id_order_advantage: number;
  id_shop: number;
  price_tax_excluded: number;
  tax: number;
  price: number;
  title: string;
}
