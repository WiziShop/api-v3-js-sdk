import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { CatalogListDto } from '../../dtos/catalog/catalog-list.dto';

export class CatalogListForm {
  static submit(shopId: number, uri: string, limit: number): Observable<CatalogListDto> {
    return WiziApiService.get<CatalogListDto>(`/shops/${shopId}/catalog`, {
      uri: uri,
      limit: limit
    });
  }
}
