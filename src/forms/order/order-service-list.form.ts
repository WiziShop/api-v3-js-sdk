import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { OrderServiceDto } from '../../dtos/order/order-service.dto';

export class OrderServiceListForm {
  static submit(idShop: number, idOrder: number): Observable<OrderServiceDto[]> {
    return WiziApiService.get<OrderServiceDto[]>(`/shops/${idShop}/order-service/${idOrder}`);
  }
}
