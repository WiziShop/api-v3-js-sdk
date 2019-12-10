import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { ShippingListDto } from '../../dtos/shipping/shipping-list.dto';

export class ShippingListForm {
  static submit(shopId: number, page: number, limit: number, search?: string): Observable<ShippingListDto> {
    return WiziApiService.get<ShippingListDto>(`/shops/${shopId}/shippings`, {
      search: search,
      page: page,
      limit: limit
    });
  }
}
