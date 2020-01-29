import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { BrandListDto } from '../../dtos/brand/brand-list.dto';

export class BrandSpecificListForm {
  static submit(shopId: number, brandIds: string, page: number, limit: number): Observable<BrandListDto> {
    return WiziApiService.get<BrandListDto>(`/shops/${shopId}/brands-specific`, {
      brandIds: brandIds,
      page: page,
      limit: limit
    });
  }
}
