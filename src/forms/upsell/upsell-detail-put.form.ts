import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';

import { UpsellDetailDto } from '../../dtos/upsell/upsell-detail.dto';

export class UpsellDetailPutForm {
  static submit(shopId: number, prodUpsellId: number, dto: UpsellDetailDto): Observable<string> {
    return WiziApiService.put<string>(`/shops/${shopId}/prod-upsell-detail/${prodUpsellId}`, dto);
  }
}
