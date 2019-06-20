import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { OrderListDto } from '../../dtos/order/order-list.dto';

export class OrderListForm {
  static submit(idShop: number, page: number, limit: number, sort: string, order: string): Observable<OrderListDto> {
    page += 1;
    order = order === 'desc' ? '-' : '';
    const url = '/shops/' + idShop + '/orders?page=' + page + '&limit=' + limit + '&sort=' + order + sort;

    return WiziApiService.get<OrderListDto>(url);
  }
}
