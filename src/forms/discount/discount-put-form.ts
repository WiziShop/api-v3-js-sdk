import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { DiscountDto } from '../../dtos/discount/discount.dto';

export class DiscountPutForm {
  static submit(idShop: number, discountId: number, discount: DiscountDto): Observable<DiscountDto> {
    return WiziApiService.put<DiscountDto>(`/shops/${idShop}/discount/${discountId}`, discount);
  }
}
