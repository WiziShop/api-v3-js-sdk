import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';
import { ListDto } from '../../../dtos/list.dto';
import { AccountUserDto } from '../../../dtos/account/user/account-user.dto';


export class AccountUserListForm {


  static submit(acId: number, page: number, limit: number): Observable<ListDto<AccountUserDto>> {
    return WiziApiService.get<ListDto<AccountUserDto>>(`/accounts/${acId}/users?limit=` + limit + `&page=` + page);
  }

}
