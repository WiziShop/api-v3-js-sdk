import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';

export class BigBuySetApiKeyForm {
  static submit(shopId: number, apiKey: string): Observable<boolean> {
    return WiziApiService.post<boolean>(`/shops/${shopId}/bigbuy/${apiKey}`);
  }
}
