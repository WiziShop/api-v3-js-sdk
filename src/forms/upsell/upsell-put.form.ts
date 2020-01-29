import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';

import { UpsellDto } from '../../dtos/upsell/upsell.dto';

export class UpsellPutForm {
  static submit(shopId: number, id: number, title: string, enabled: boolean): Observable<UpsellDto> {
    return WiziApiService.put<UpsellDto>(`/shops/${shopId}/prod-upsell/${id}`, {
      title: title,
      enabled: enabled
    });
  }
}
