import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';

import { UpsellDto } from '../../dtos/upsell/upsell.dto';

export class UpsellPostForm {
  static submit(shopId: number, title: string, enabled: boolean): Observable<UpsellDto> {
    return WiziApiService.post<UpsellDto>(`/shops/${shopId}/prod-upsell`, {
      title: title,
      enabled: enabled
    });
  }
}
