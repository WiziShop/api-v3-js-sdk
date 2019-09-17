import { WiziApiService } from '../../services/wizi-api.service';
import { Observable } from 'rxjs';
import { CategoryDto } from '../../dtos/category/category.dto';

export class CategoryFormStructure {
  id_parent: number;
  name: string;
  url: string;
  menu_title: string;
  visible: boolean;
}

export class CategoryCreateForm {
  static submit(shopId: number, category: CategoryFormStructure): Observable<CategoryDto> {
    return WiziApiService.post<CategoryDto>(`/shops/${shopId}/categories`, category);
  }
}
