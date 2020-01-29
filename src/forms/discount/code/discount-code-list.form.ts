import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';
import { DiscountCodeListDto } from '../../../dtos/discount/discount-code-list.dto';

export class DiscountCodeListForm {
  static submit(idShop: number, idDiscount: number, page: number, limit: number): Observable<DiscountCodeListDto> {
    page = Number(page) ? Number(page) + 1 : 1;
    const params = {
      page: page,
      limit: limit
    };

    return WiziApiService.get<DiscountCodeListDto>(`/shops/${idShop}/discount-code/${idDiscount}`, params);
  }
}
