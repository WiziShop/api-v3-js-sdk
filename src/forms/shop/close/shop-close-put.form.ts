import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';

export class ShopClosePutForm {
  static submit(idShop: number): Observable<null> {
    return WiziApiService.put<null>(`/shops/${idShop}/close`);
  }
}
