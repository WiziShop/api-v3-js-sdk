export interface ShopSummaryDto {
  id: number;
  account_id: number;
  group_id: number;
  turnover: number;
  turnover_last_month: number;
  turnover_last_year: number;
  number_of_products: number;
  number_of_clients: number;
  number_of_orders: number;
  number_of_register_newsletters: number;
}
