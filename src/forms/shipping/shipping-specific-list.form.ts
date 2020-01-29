import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { ShippingListDto } from '../../dtos/shipping/shipping-list.dto';

export class ShippingSpecificListForm {
  static submit(shopId: number, shippingIds: string, page: number, limit: number): Observable<ShippingListDto> {
    return WiziApiService.get<ShippingListDto>(`/shops/${shopId}/shippings-specific`, {
      shippingIds: shippingIds,
      page: page,
      limit: limit
    });
  }
}
