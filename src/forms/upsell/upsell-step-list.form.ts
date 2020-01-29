import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';

import { UpsellStepDto } from '../../dtos/upsell/upsell-step.dto';

export class UpsellStepListForm {
  static submit(shopId: number, prodUpsellId: number): Observable<UpsellStepDto[]> {
    return WiziApiService.get<UpsellStepDto[]>(`/shops/${shopId}/prod-upsell/${prodUpsellId}/steps`);
  }
}
