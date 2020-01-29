import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';

import { UpsellStepDto } from '../../dtos/upsell/upsell-step.dto';

export class UpsellStepListPutForm {
  static submit(shopId: number, prodUpsellId: number, dto: UpsellStepDto[]): Observable<string> {
    return WiziApiService.put<string>(`/shops/${shopId}/prod-upsell/${prodUpsellId}/steps`, dto);
  }
}
