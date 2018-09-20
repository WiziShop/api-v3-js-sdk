import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';
import { AccountUserDto } from '../../../dtos/account/user/account-user.dto';

export class AccountUserCreateForm {
  static submit(
    acId: number,
    email: string,
    role_type: string,
    id_shop: number
  ): Observable<AccountUserDto> {
    return WiziApiService.post<AccountUserDto>(`/accounts/${acId}/users`, {
      email: email,
      role_type: role_type,
      id_shop: id_shop
    });
  }
}
