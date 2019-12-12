import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';

import { UpsellDetailDto } from '../../dtos/upsell/upsell-detail.dto';

export class UpsellDetailGetForm {
  static submit(shopId: number, prodUpsellId: number): Observable<UpsellDetailDto> {
    return WiziApiService.get<UpsellDetailDto>(`/shops/${shopId}/prod-upsell-detail/${prodUpsellId}`);
  }
}
