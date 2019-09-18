import { ShopDto } from '../shop/shop.dto';

export interface GroupDto {
  id: number;
  account_id: number;
  name: string;
  color: string;
  shops: Array<ShopDto>;
  type: string;
}
