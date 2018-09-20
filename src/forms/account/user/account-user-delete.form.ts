import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';

export class AccountUserDeleteForm {
  static submit(acId: number, userId: number): Observable<string> {
    return WiziApiService.delete<string>(`/accounts/${acId}/users/${userId}`);
  }
}
