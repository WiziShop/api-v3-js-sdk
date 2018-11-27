import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';

export class TemplateMegacacheDeleteForm {
  static submit(shopId: number, idTpl: number): Observable<boolean> {
    return WiziApiService.delete<boolean>(`/shops/${shopId}/templates/${idTpl}`);
  }
}
