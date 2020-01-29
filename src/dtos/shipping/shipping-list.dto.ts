import { ShippingDto } from './shipping.dto';

export class ShippingListDto {
  page: number;
  limit: number;
  pages: number;
  total: number;
  results: ShippingDto[];
}
