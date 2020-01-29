import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';

export class DiscountDeleteForm {
  static submit(idShop: number, discountId: number): Observable<null> {
    return WiziApiService.delete<null>(`/shops/${idShop}/discount/${discountId}`);
  }
}
