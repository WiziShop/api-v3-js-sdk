import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { OrderDto } from '../../dtos/order/order.dto';

export class BusyXOrderCreateForm {
  static submit(shopId: number, order: OrderDto, payment_id: number, carrier_id: number, shipping_fees: number): Observable<boolean> {
    return WiziApiService.post<boolean>(`/shops/${shopId}/busyx/order/create`, {
      order: order,
      payment_id: payment_id,
      carrier_id: carrier_id,
      shipping_fees: shipping_fees
    });
  }
}
