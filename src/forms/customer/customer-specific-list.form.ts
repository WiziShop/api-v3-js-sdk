import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { CustomerListDto } from '../../dtos/customer/customer-list.dto';

export class CustomerSpecificListForm {
  static submit(shopId: number, customerIds: string, page: number, limit: number): Observable<CustomerListDto> {
    return WiziApiService.get<CustomerListDto>(`/shops/${shopId}/customers-specific`, {
      customerIds: customerIds,
      page: page,
      limit: limit
    });
  }
}
