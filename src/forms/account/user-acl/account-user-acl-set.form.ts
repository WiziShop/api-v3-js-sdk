import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';
import { UserAccountAclDto } from '../../../dtos/user/account-acl/user-account-acl.dto';


export class AccountUserAclSetForm {


  static submit(acId: number, userId: number, resources: Array<{
    resource: string;
    write_permission: boolean
  }>): Observable<UserAccountAclDto[]> {
    return WiziApiService.put<UserAccountAclDto[]>(`/accounts/${acId}/users/${userId}/acl`, resources);
  }

}
