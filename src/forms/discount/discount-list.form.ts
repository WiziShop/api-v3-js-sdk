import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { DiscountListDto } from '../../dtos/discount/discount-list.dto';

export class DiscountListForm {
  static submit(
    idShop: number,
    page: number,
    limit: number,
    sort: string,
    order: string,
    state?: string,
    search?: string
  ): Observable<DiscountListDto> {
    page = Number(page) ? Number(page) + 1 : 0;
    order = order === 'desc' ? '-' : '';
    const params = {
      page: page,
      state: state,
      sort: order + sort,
      search: search
    };
    return WiziApiService.get<DiscountListDto>(`/shops/${idShop}/discount`, params);
  }
}
