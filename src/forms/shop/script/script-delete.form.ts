import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';

export class ScriptDeleteForm {
  static submit(idShop: number, idScript: number): Observable<null> {
    return WiziApiService.delete<null>(`/shops/${idShop}/scripts/${idScript}`);
  }
}
