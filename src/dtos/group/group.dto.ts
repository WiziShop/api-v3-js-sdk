import { ShopDto } from '../..';

export interface GroupDto {
  id: number;
  account_id: number;
  name: string;
  color: string;
  shops: Array<ShopDto>;
}
