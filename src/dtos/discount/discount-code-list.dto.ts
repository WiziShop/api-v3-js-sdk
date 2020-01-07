import { DiscountCodeDto } from './discount-code.dto';

export class DiscountCodeListDto {
  page: number;
  limit: number;
  pages: number;
  total: number;
  results: DiscountCodeDto[];
}
