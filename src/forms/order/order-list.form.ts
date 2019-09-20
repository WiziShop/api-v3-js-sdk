import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { OrderListDto } from '../../dtos/order/order-list.dto';

export class OrderListForm {
  static submit(
    idShop: number,
    page: number,
    limit: number,
    sort: string,
    order: string,
    from_status_code?: number,
    to_status_code?: number
  ): Observable<OrderListDto> {
    if (Number(page)) {
      page = Number(page) + 1;
    } else {
      page = 0;
    }
    order = order === 'desc' ? '-' : '';

    return WiziApiService.get<OrderListDto>(`/shops/${idShop}/orders`, {
      page: page,
      limit: limit,
      sort: order + sort,
      from_status_code: from_status_code,
      to_status_code: to_status_code
    });
  }
}
