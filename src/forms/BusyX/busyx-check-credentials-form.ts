import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';

export class FormBusyXCheckCredentials {
  static submit(shopId: number, api_log: string, api_key: string): Observable<boolean> {
    return WiziApiService.post<boolean>(`/shops/${shopId}/busyx/check-credentials`, {
      api_log: api_log,
      api_key: api_key
    });
  }
}
