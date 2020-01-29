import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { CategoryListDto } from '../../dtos/category/category-list.dto';

export class CategoryListForm {
  static submit(shopId: number, page: number, limit: number, sort?: string, search?: string): Observable<CategoryListDto> {
    return WiziApiService.get<CategoryListDto>(`/shops/${shopId}/categories`, {
      search: search,
      page: page,
      limit: limit
    });
  }
}
