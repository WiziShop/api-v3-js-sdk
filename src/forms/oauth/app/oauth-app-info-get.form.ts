import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';
import { OauthAppInfoDto } from '../../../dtos/oauth/app/oauth-app-info.dto';

export class OauthAppInfoGetForm {
  static submit(shopId: number, appId: number): Observable<OauthAppInfoDto> {
    return WiziApiService.get<OauthAppInfoDto>(`/shop/${shopId}/oauth-app-info/${appId}`);
  }
}
