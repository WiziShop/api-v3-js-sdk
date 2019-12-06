import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';

export class ShopEndDateSetForm {
  static submit(idShop: number, end_date: string): Observable<null> {
    return WiziApiService.put<null>(`/shops/${idShop}/end-date`, {
      end_date: end_date
    });
  }
}
