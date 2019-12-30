import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';

export class ShopCloseTokenPostForm {
  static submit(idShop: number, end_date: string): Observable<null> {
    return WiziApiService.post<null>(`/shops/${idShop}/close-token`, {
      end_date: end_date
    });
  }
}
