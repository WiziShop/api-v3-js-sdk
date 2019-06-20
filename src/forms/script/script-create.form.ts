import { Observable } from 'rxjs';
import { ScriptDeviceType, ScriptDto, ScriptPageType, ScriptPositionType } from '../../dtos/script/script.dto';
import { WiziApiService } from '../../services/wizi-api.service';

export class ScriptCreateForm {
  static submit(shopId: number, structure: ScriptFormStructure): Observable<ScriptDto> {
    return WiziApiService.post<ScriptDto>(`/shops/${shopId}/scripts`, structure);
  }
}

export class ScriptFormStructure {
  name = '';
  content = '';
  page: ScriptPageType = 'all';
  position: ScriptPositionType = 'head';
  device: ScriptDeviceType = 'all';
}
