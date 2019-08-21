import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';

export class AccountGroupAllRemainingLocalesForm {
  static submit(acId: number, gId: number): Observable<string[]> {
    return WiziApiService.get<string[]>(`/accounts/${acId}/groups/${gId}/remaining-locales`);
  }
}
