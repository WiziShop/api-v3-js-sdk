import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { CustomerListDto } from '../../dtos/customer/customer-list.dto';

export class CustomerListForm {
  static submit(
    shopId: number,
    page: number,
    limit: number,
    sort?: string,
    since_registration?: string,
    search?: string
  ): Observable<CustomerListDto> {
    return WiziApiService.get<CustomerListDto>(`/shops/${shopId}/customers`, {
      sort: sort,
      search: search,
      since_registration: since_registration,
      page: page,
      limit: limit
    });
  }
}
