import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { ShopDto } from '../../dtos/shop/shop.dto';

export class ShopCreateForm {
  static submit(
    name: string,
    type: string = null,
    origin: string = 'wizishop',
    locale: string = 'fr_FR',
    from_id_shop: number = null,
    duplicate_product: boolean = false,
    duplicate_page: boolean = false,
    duplicate_config: boolean = false,
    duplicate_design: boolean = false,
    ac_id: number = null,
    g_id: number = null
  ): Observable<ShopDto> {
    return WiziApiService.post<ShopDto>(`/shops`, {
      name: name,
      type: type,
      origin: origin,
      locale: locale,
      from_id_shop: from_id_shop,
      duplicate_product: duplicate_product,
      duplicate_page: duplicate_page,
      duplicate_config: duplicate_config,
      duplicate_design: duplicate_design,
      ac_id: ac_id,
      g_id: g_id
    });
  }
}