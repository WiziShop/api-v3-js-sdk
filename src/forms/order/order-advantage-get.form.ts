import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { OrderAdvantageDto } from '../../dtos/order/order-advantage.dto';

export class OrderAdvantageGetForm {
  static submit(idShop: number, idOa: number): Observable<OrderAdvantageDto> {
    return WiziApiService.get<OrderAdvantageDto>(`/shops/${idShop}/order-advantage/${idOa}`);
  }
}
