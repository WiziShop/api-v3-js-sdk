import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';
import { OrderSupplierOrderDto } from '../../../dtos/order/supplier-order/order-supplier-order.dto';

export class OrderSupplierOrderAllForm {
  static submit(shopId: number, orderId: number): Observable<OrderSupplierOrderDto[]> {
    return WiziApiService.get<OrderSupplierOrderDto[]>(`/shops/${shopId}/order/${orderId}/supplier-orders`);
  }
}
