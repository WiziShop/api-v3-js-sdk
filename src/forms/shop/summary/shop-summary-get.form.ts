import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';
import { ShopSummaryDto } from '../../../dtos/shop/summary/shop-summary.dto';

export class ShopSummaryGetForm {
  static submit(idShop: number): Observable<ShopSummaryDto> {
    return WiziApiService.get<ShopSummaryDto>(`/shops/${idShop}/summary`);
  }
}
