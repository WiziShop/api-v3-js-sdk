import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';

export class OrderAdvantagePdfGetForm {
  static submit(idShop: number, id_sc: number): Observable<Blob> {
    return WiziApiService.request<Blob>(`/shops/${idShop}/store-credits/${id_sc}/pdf`, {
      method: 'GET',
      responseType: 'blob',
      headers: {
        'Content-Type': 'application/pdf'
      }
    });
  }
}
