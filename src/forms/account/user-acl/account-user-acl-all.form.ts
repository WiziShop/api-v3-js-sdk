import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';
import { UserAccountAclDto } from '../../../dtos/user/account-acl/user-account-acl.dto';

export class AccountUserAclAllForm {
  static submit(acId: number, userId: number): Observable<UserAccountAclDto[]> {
    return WiziApiService.get<UserAccountAclDto[]>(`/accounts/${acId}/users/${userId}/acl`);
  }
}
