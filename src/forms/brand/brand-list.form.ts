import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { BrandListDto } from '../../dtos/brand/brand-list.dto';

export class BrandListForm {
  static submit(shopId: number, page: number, limit: number, sort?: string, search?: string): Observable<BrandListDto> {
    return WiziApiService.get<BrandListDto>(`/shops/${shopId}/brands`, {
      sort: sort,
      search: search,
      page: page,
      limit: limit
    });
  }
}
