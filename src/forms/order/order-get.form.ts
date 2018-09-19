import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { OrderDto } from '../../dtos/order/order.dto';


export class OrderGetForm {

  static submit(shopId: number, orderId: number): Observable<OrderDto> {
    return WiziApiService.get<OrderDto>(`/shops/${shopId}/orders/${orderId}`);
  }

}
