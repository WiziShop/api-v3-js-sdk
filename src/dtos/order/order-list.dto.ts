import { OrderDto } from './order.dto';

export interface OrderListDto {
  page: number;
  limit: number;
  pages: number;
  total: number;
  results: OrderDto[];
}
