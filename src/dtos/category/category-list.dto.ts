import { CategoryDto } from './category.dto';

export class CategoryListDto {
  page: number;
  limit: number;
  pages: number;
  total: number;
  results: CategoryDto[];
}
