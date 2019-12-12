import { ProductDto } from '../product/product.dto';

export interface UpsellStatDto {
  id_shop: number;
  prod_upsell_id: number;
  id_prod: number;
  product: ProductDto;
  price: number;
  total_viewed: number;
  total_ordered: number;
  total_accepted: number;
  total_declined: number;
  total_timer_ended: number;
}
