import { Observable } from 'rxjs';
import { ScriptDto } from '../../dtos/script/script.dto';
import { WiziApiService } from '../../services/wizi-api.service';
import { ScriptFormStructure } from './script-create.form';

export class ScriptSetForm {
  static submit(shopId: number, idScript: number, structure: ScriptFormStructure): Observable<ScriptDto> {
    return WiziApiService.put<ScriptDto>(`/shops/${shopId}/scripts/${idScript}`, structure);
  }
}
