import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';

export class OrderAdvantagePdfGetForm {
  static submit(idShop: number, id_oa: number): Observable<Blob> {
    return WiziApiService.request<Blob>(`/shops/${idShop}/order-advantage/${id_oa}/pdf`, {
      method: 'GET',
      responseType: 'blob',
      headers: {
        'Content-Type': 'application/pdf'
      }
    });
  }
}
