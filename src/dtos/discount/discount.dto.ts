import { DiscountConfigDto } from './discount-config.dto';
import { DiscountCodeDto } from './discount-code.dto';

export class DiscountDto {
  id?: number;
  id_shop: number;
  title: string;
  amount: number;
  amount_type: string;
  usage_type: string;
  min_amount: number;
  exclude_discount_prod: boolean;
  total_nb_used: number;
  state?: string;
  discount_tag_code?: string;
  generate_code_number?: number;
  start_discount_valid_date: string;
  end_discount_valid_date: string;
  created_at?: string;
  updated_at?: string;
  discount_config: DiscountConfigDto;
  discount_codes?: DiscountCodeDto[];
}
