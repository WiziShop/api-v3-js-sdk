import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';
import { OrderSupplierOrderDto } from '../../../dtos/order/supplier-order/order-supplier-order.dto';

export class OrderSupplierOrderSetForm {
  static submit(shopId: number, orderId: number, id: number, supplierName: string, supplierId: string): Observable<OrderSupplierOrderDto> {
    return WiziApiService.put<OrderSupplierOrderDto>(`/shops/${shopId}/order/${orderId}/supplierOrders/${id}`, {
      supplier_name: supplierName,
      supplier_order_id: supplierId
    });
  }
}
