import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';

export class DiscountGetCodeForm {
  static submit(idShop: number): Observable<string> {
    return WiziApiService.get<string>(`/shops/${idShop}/discount/code/`);
  }
}
