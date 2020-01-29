import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';

import { ListDto } from '../../dtos/list.dto';
import { UpsellDto } from '../../dtos/upsell/upsell.dto';

export class UpsellListForm {
  static submit(shopId: number): Observable<ListDto<UpsellDto>> {
    return WiziApiService.get<ListDto<UpsellDto>>(`/shops/${shopId}/prod-upsell`);
  }
}
