import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { ShopDto } from '../../dtos/shop/shop.dto';

export class ShopSetForm {
  static submit(idShop: number, shop_name: string): Observable<ShopDto> {
    return WiziApiService.put<ShopDto>(`/shops/${idShop}`, {
      shop_name
    });
  }
}
