import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';
import { AccountUserDto } from '../../../dtos/account/user/account-user.dto';

export class AccountUserSetForm {
  static submit(acId: number, userId: number, role_type: string): Observable<AccountUserDto> {
    return WiziApiService.put<AccountUserDto>(`/accounts/${acId}/users/${userId}`, {
      role_type: role_type,
      shop_id: null
    });
  }
}
