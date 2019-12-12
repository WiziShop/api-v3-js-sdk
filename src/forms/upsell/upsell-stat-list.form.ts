import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';

import { UpsellStatDto } from '../../dtos/upsell/upsell-stat.dto';
import { ListDto } from '../../dtos/list.dto';

export class UpsellStatListForm {
  static submit(
    shopId: number,
    params: {
      prod_upsell_id?: number;
      limit?: number;
      page?: number;
    }
  ): Observable<ListDto<UpsellStatDto>> {
    return WiziApiService.get<ListDto<UpsellStatDto>>(`/shops/${shopId}/prod-upsell-stat`, params);
  }
}
