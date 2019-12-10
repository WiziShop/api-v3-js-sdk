import { CustomerDto } from './customer.dto';

export class CustomerListDto {
  page: number;
  limit: number;
  pages: number;
  total: number;
  results: CustomerDto[];
}
