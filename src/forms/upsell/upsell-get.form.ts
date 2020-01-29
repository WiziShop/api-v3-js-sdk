import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';

import { UpsellDto } from '../../dtos/upsell/upsell.dto';

export class UpsellGetForm {
  static submit(shopId: number, prodUpsellId: number): Observable<UpsellDto> {
    return WiziApiService.get<UpsellDto>(`/shops/${shopId}/prod-upsell/${prodUpsellId}`);
  }
}
