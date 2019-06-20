import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';

export class BusyXImportProductForm {
  static submit(shopId: number, idProduct: number): Observable<boolean> {
    return WiziApiService.post<boolean>(`/shops/${shopId}/busyx/product/import/${idProduct}`);
  }
}
