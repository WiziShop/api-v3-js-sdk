import { Observable } from 'rxjs';
import { ScriptDto } from '../../../dtos/script/script.dto';
import { WiziApiService } from '../../../services/wizi-api.service';

export class ScriptSetForm {
  static submit(
    idShop: number,
    idScript: number,
    name: string,
    content: string,
    page: string,
    position: string,
    device: string
  ): Observable<ScriptDto> {
    return WiziApiService.put<ScriptDto>(`/shops/${idShop}/scripts/${idScript}`, {
      name: name,
      content: content,
      page: page,
      position: position,
      device: device
    });
  }
}
