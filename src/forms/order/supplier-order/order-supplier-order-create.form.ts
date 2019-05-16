import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';
import { OrderSupplierOrderDto } from '../../../dtos/order/supplier-order/order-supplier-order.dto';

export class OrderSupplierOrderCreateForm {
  static submit(shopId: number, orderId: number, supplierName: string, supplierId: string): Observable<OrderSupplierOrderDto> {
    return WiziApiService.post<OrderSupplierOrderDto>(`/shops/${shopId}/order/${orderId}/supplier-orders`, {
      supplier_name: supplierName,
      supplier_order_id: supplierId
    });
  }
}
