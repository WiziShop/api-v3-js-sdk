import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';
import { GroupPlanDto } from '../../../dtos/group/plan/group-plan.dto';

export class AccountGroupPlanGetForm {
  static submit(acId: number, gId: number): Observable<GroupPlanDto> {
    return WiziApiService.get<GroupPlanDto>(`/accounts/${acId}/groups/${gId}/plans`);
  }
}
