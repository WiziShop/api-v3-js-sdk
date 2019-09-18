import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { OrderAdvantageDto } from '../../dtos/order/order-advantage.dto';

export class OrderAdvantageValidForm {
  static submit(idShop: number, id_sc: number, sendMail: boolean): Observable<OrderAdvantageDto> {
    return WiziApiService.post<OrderAdvantageDto>(`/shops/${idShop}/store-credits/${id_sc}`, sendMail);
  }
}
