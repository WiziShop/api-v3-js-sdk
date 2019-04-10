import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';

export class ScriptDeleteForm {
  static submit(shopId: number, idScript: number): Observable<null> {
    return WiziApiService.delete<null>(`/shops/${shopId}/scripts/${idScript}`);
  }
}
