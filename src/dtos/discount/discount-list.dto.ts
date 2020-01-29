import { DiscountDto } from './discount.dto';

export class DiscountListDto {
  page: number;
  limit: number;
  pages: number;
  total: number;
  results: DiscountDto[];
}
