import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { BusyXOrderPriceDto } from '../../dtos/busyx/busyx-order-price.dto';

export class BusyXOrderPriceCheckForm {
  static submit(shop_id: number, api_log: string, api_key: string, order_id: number, carrier_id: number): Observable<BusyXOrderPriceDto> {
    return WiziApiService.post<BusyXOrderPriceDto>(`/shops/${shop_id}/busyx/order/price/check`, {
      order_id: order_id,
      api_log: api_log,
      api_key: api_key,
      carrier_id: carrier_id
    });
  }
}
