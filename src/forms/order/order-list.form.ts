import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { OrderListDto } from '../../dtos/order/order-list.dto';

export class OrderListForm {
  static submit(idShop: number, page: number, limit: number, sort: string, order: string): Observable<OrderListDto> {
    if (Number(page)) {
      page = Number(page) + 1;
    } else {
      page = 0;
    }

    order = order === 'desc' ? '-' : '';
    //Etat min payé : 11 - voir _c\Commande
    const url =
      '/shops/' + idShop + '/orders?page=' + page + '&limit=' + limit + '&sort=' + order + sort + '&from_status_code=11&to_status_code=50';

    return WiziApiService.get<OrderListDto>(url);
  }
}
