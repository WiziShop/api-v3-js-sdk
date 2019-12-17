import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';

export class ShopCloseTokenPutForm {
  static submit(idShop: number, shopCloseToken: ShopCloseTokenStructure): Observable<null> {
    return WiziApiService.put<null>(`/shops/${idShop}/close-by-token`, shopCloseToken);
  }
}

class ShopCloseTokenStructure {
  token: string;
}
