import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { CatalogListDto } from '../../dtos/catalog/catalog-list.dto';

export class CatalogSpecificForm {
  static submit(shopId: number, prodIds: string, page: number, limit: number): Observable<CatalogListDto> {
    return WiziApiService.get<CatalogListDto>(`/shops/${shopId}/catalog-specific`, {
      prodIds: prodIds,
      page: page,
      limit: limit
    });
  }
}
