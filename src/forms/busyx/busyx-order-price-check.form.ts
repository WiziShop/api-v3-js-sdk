import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { BusyXOrderPriceDto } from '../../dtos/busyx/busyx-order-price.dto';

export class BusyXOrderPriceCheckForm {
  static submit(shop_id: number, order_id: number, carrier_id: number): Observable<BusyXOrderPriceDto> {
    return WiziApiService.post<BusyXOrderPriceDto>(`/shops/${shop_id}/busyx/order/price/check`, {
      order_id: order_id,
      carrier_id: carrier_id
    });
  }
}
