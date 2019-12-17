import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';

export class ShopCloseTokenPostForm {
  static submit(idShop: number): Observable<null> {
    return WiziApiService.post<null>(`/shops/${idShop}/close-token`);
  }
}
