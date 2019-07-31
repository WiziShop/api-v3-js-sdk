import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { BusyXOrderCreateDto } from '../../dtos/busyx/busyx-order-create.dto';

export class BusyXOrderCreateForm {
  static submit(
    shop_id: number,
    api_log: string,
    api_key: string,
    order_id: number,
    payment_id: number,
    carrier_id: number
  ): Observable<BusyXOrderCreateDto> {
    return WiziApiService.post<BusyXOrderCreateDto>(`/shops/${shop_id}/busyx/order/create`, {
      order_id: order_id,
      api_log: api_log,
      api_key: api_key,
      payment_id: payment_id,
      carrier_id: carrier_id
    });
  }
}
