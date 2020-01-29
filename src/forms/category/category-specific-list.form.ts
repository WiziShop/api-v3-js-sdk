import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { CategoryListDto } from '../../dtos/category/category-list.dto';

export class CategorySpecificListForm {
  static submit(shopId: number, categoryIds: string, page: number, limit: number): Observable<CategoryListDto> {
    return WiziApiService.get<CategoryListDto>(`/shops/${shopId}/categories-specific`, {
      categoryIds: categoryIds,
      page: page,
      limit: limit
    });
  }
}
