import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';
import { GroupDto } from '../../../dtos/group/group.dto';

export class AccountGroupSetForm {
  static submit(acId: number, gId: number, name: string, color: string): Observable<GroupDto> {
    return WiziApiService.put<GroupDto>(`/accounts/${acId}/groups/${gId}`, {
      name,
      color
    });
  }
}
