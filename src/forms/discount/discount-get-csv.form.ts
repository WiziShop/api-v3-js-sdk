import { WiziApiService } from '../../services/wizi-api.service';
import { Observable } from 'rxjs';

export class DiscountGetCsvForm {
  static submit(idShop: number, discountId: number): Observable<Blob> {
    return WiziApiService.request(`/shops/${idShop}/discount/${discountId}/csv`, {
      method: 'GET',
      responseType: 'blob',
      headers: {
        'Content-Type': 'text/csv'
      }
    });
  }
}
