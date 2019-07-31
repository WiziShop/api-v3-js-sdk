import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { OrderAdvantageDto } from '../../dtos/order/order-advantage.dto';
import { OrderAdvantageStructure } from './order-advantage-post.form';

export class OrderAdvantagePutForm {
  static submit(idShop: number, orderAdvantage: OrderAdvantageStructure): Observable<OrderAdvantageDto> {
    return WiziApiService.put<OrderAdvantageDto>(`/shops/${idShop}/order-advantage`, orderAdvantage);
  }
}
