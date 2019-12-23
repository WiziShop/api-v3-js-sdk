import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { DiscountDto } from '../../dtos/discount/discount.dto';

export class DiscountGetForm {
  static submit(idShop: number, discountId: number): Observable<DiscountDto> {
    return WiziApiService.get<DiscountDto>(`/shops/${idShop}/discount/${discountId}`);
  }
}
