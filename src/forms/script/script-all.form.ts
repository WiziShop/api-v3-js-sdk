import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { ScriptDto } from '../../dtos/script/script.dto';

export class ScriptAllForm {
  static submit(shopId: number): Observable<ScriptDto[]> {
    return WiziApiService.get<ScriptDto[]>(`/shops/${shopId}/scripts`);
  }
}
