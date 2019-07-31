import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { CatalogListDto } from '../../dtos/catalog/catalog-list.dto';

export class CatalogSearchForm {
  static submit(shopId: number, search: string, page: number, limit: number): Observable<CatalogListDto> {
    return WiziApiService.get<CatalogListDto>(`/shops/${shopId}/catalog-search`, {
      search: search,
      page: page,
      limit: limit
    });
  }
}
