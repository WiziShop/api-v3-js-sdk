import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { DiscountDto } from '../../dtos/discount/discount.dto';

export class DiscountPostForm {
  static submit(idShop: number, discount: DiscountDto): Observable<DiscountDto> {
    return WiziApiService.post<DiscountDto>(`/shops/${idShop}/discount`, discount);
  }
}
