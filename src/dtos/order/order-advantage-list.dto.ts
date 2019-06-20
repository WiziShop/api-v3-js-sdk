import { OrderAdvantageDto } from './order-advantage.dto';

export interface OrderAdvantageListDto {
  results: OrderAdvantageDto[];
  page: string;
  limit: number;
  pages: number;
  total: number;
}
