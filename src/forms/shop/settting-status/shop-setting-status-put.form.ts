import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';

export class ShopSettingStatusPutForm {
  static submit(idShop: number, shopSettingsStatus: ShopSettingStatusStructure): Observable<null> {
    return WiziApiService.put<null>(`/shops/${idShop}/setting-status`, shopSettingsStatus);
  }
}

class ShopSettingStatusStructure {
  token: string;
}
