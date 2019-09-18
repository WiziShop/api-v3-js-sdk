import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { OrderAdvantageDto } from '../../dtos/order/order-advantage.dto';
import { StoreCreditStructure } from './order-advantage-post.form';

export class OrderAdvantagePutForm {
  static submit(idShop: number, storeCredit: StoreCreditStructure, id_sc: number): Observable<OrderAdvantageDto> {
    return WiziApiService.put<OrderAdvantageDto>(`/shops/${idShop}/store-credits/${id_sc}`, storeCredit);
  }
}
