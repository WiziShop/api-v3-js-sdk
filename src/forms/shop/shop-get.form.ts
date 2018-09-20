import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { ShopDto } from '../../dtos/shop/shop.dto';

export class ShopGetForm {
  static submit(idShop: number): Observable<ShopDto> {
    return WiziApiService.get<ShopDto>(`/shops/${idShop}`);
  }
}
