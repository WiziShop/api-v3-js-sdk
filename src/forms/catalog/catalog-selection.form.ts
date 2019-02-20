import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { CatalogListDto } from '../../dtos/catalog/catalog-list.dto';

export class CatalogSelectionForm {
  static submit(shopId: number, type: string, page: number, limit: number): Observable<CatalogListDto> {
    return WiziApiService.get<CatalogListDto>(`/shops/${shopId}/catalog-selection`, {
      type: type,
      page: page,
      limit: limit
    });
  }
}
