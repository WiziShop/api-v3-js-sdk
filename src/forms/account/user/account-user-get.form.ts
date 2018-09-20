import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';
import { AccountUserDto } from '../../../dtos/account/user/account-user.dto';

export class AccountUserGetForm {
  static submit(acId: number, userId: number): Observable<AccountUserDto> {
    return WiziApiService.get<AccountUserDto>(
      `/accounts/${acId}/users/${userId}`
    );
  }
}
