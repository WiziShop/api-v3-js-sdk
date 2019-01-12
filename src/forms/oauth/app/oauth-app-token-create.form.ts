import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';
import { OauthAppTokenDto } from '../../../dtos/oauth/app/oauth-app-token.dto';

export class OauthAppTokenCreateForm {
  static submit(app_id: number, redirect_uri: string, code: string): Observable<OauthAppTokenDto> {
    return WiziApiService.post<OauthAppTokenDto>(`/oauth-app/token`, {
      app_id: app_id,
      code: code,
      redirect_uri: redirect_uri
    });
  }
}
