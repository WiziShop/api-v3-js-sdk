import { BrandDto } from './brand.dto';

export class BrandListDto {
  page: number;
  limit: number;
  pages: number;
  total: number;
  results: BrandDto[];
}
