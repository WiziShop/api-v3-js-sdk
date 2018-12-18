import { Observable } from 'rxjs';
import { AccountDto } from '../../dtos/account/account.dto';
import { WiziApiService } from '../../services/wizi-api.service';

export class AccountGetForm {
  static submit(acId: number): Observable<AccountDto> {
    return WiziApiService.get<AccountDto>(`/accounts/${acId}`);
  }
}
