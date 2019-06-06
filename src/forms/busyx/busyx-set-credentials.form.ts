import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';

export class BusyXSetCredentialsForm {
  static submit(shopId: number, api_log: string, api_key: string): Observable<boolean> {
    return WiziApiService.post<boolean>(`/shops/${shopId}/busyx/set-credentials`, {
      api_log: api_log,
      api_key: api_key
    });
  }
}
