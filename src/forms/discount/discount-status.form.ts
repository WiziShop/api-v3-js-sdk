import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';

export class DiscountStatusForm {
  static submit(idShop: number, discountId: number, status: string): Observable<null> {
    return WiziApiService.put<null>(`/shops/${idShop}/discount/status/${discountId}`, { status: status });
  }
}
