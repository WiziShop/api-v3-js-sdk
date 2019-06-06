import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { BusyXShippingOrdersDto } from '../../dtos/busyx/busyx-shopping-orders.dto';

export class BusyXShoppingOrdersForm {
  static submit(shopId: number, contryIso: string, weight: number): Observable<BusyXShippingOrdersDto> {
    return WiziApiService.get<BusyXShippingOrdersDto>(`/shops/${shopId}/busyx/shipping-orders/${contryIso}/${weight}`);
  }
}
