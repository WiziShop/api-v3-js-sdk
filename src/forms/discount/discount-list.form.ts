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
    if (Number(page)) {
      page = Number(page) + 1;
    } else {
      page = 0;
    }
    order = order === 'desc' ? '-' : '';
    let url = '/shops/' + idShop + '/discount?page=' + page + '&limit=' + limit + '&sort=' + order + sort;
    if (state) {
      url += '&state=' + state;
    }
    if (search) {
      url += '&search=' + search;
    }

    return WiziApiService.get<DiscountListDto>(url);
  }
}
