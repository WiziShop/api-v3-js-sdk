import { WiziApiService } from '../../services/wizi-api.service';
import { Observable } from 'rxjs';
import { CategoryDto } from '../../dtos/category/category.dto';

export class CategoryGetForm {
  static submit(shopId: number, categoryId: number): Observable<CategoryDto> {
    return WiziApiService.get<CategoryDto>(`/shops/${shopId}/categories/${categoryId}`);
  }
}
