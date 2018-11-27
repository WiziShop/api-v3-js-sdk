import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { OauthCodeDto } from '../../dtos/oauth/oauth-code.dto';

export class OauthCodeGetForm {
  static submit(shopId: number, appId: number, redirectUri: string): Observable<OauthCodeDto> {
    return WiziApiService.get<OauthCodeDto>(`/shop/${shopId}/oauth-app/${appId}/code?redirect_uri=` + redirectUri);
  }
}
