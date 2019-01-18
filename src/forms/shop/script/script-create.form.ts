import { Observable } from 'rxjs';
import { ScriptDto } from '../../../dtos/script/script.dto';
import { WiziApiService } from '../../../services/wizi-api.service';

export class ScriptCreateForm {
  static submit(idShop: number, name: string, content: string, page: string, position: string, device: string): Observable<ScriptDto> {
    return WiziApiService.post<ScriptDto>(`/shops/${idShop}/scripts`, {
      name: name,
      content: content,
      page: page,
      position: position,
      device: device
    });
  }
}
