export interface InvoiceCommissionListDto {
  invoice_details_id: number;
  ac_id: number;
  g_id: number;
  id_shop: number;
  id_com: number;
  order_number: string;
  order_price: number;
  order_origin: string;
  order_at: Date;
  price_invoiced: number;
  currency_iso_code: string;
  currency_change_rate: number;
  created_at: Date;
  shop_name: string;
}
