import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { OrderAdvantageListDto } from '../../dtos/order/order-advantage-list.dto';

export class OrderAdvantageListForm {
  static submit(
    idShop: number,
    page: number,
    limit: number,
    sort: string,
    order: string,
    orderId?: number,
    publicId?: boolean
  ): Observable<OrderAdvantageListDto> {
    if (Number(page)) {
      page = Number(page) + 1;
    } else {
      page = 0;
    }
    order = order === 'desc' ? '-' : '';
    let url = '/shops/' + idShop + '/order-advantage?page=' + page + '&limit=' + limit + '&sort=' + order + sort;
    if (orderId) {
      url += '&orderId=' + orderId + '&publicId=' + publicId;
    }

    return WiziApiService.get<OrderAdvantageListDto>(url);
  }
}
