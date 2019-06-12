import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';

export class BusyXOrderCreateForm {
  static submit(shop_id: number, order_id: number, payment_id: number, carrier_id: number): Observable<boolean> {
    return WiziApiService.post<boolean>(`/shops/${shop_id}/busyx/order/create`, {
      order_id: order_id,
      payment_id: payment_id,
      carrier_id: carrier_id
    });
  }
}
