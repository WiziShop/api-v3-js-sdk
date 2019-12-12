import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';

export class ShopSettingStatusTokenPostForm {
  static submit(idShop: number, shopSettingStatusToken: ShopSettingStatusTokenStructure): Observable<null> {
    return WiziApiService.post<null>(`/shops/${idShop}/setting-status-token`, shopSettingStatusToken);
  }
}

export class ShopSettingStatusTokenStructure {
  setting_status: string;
}
