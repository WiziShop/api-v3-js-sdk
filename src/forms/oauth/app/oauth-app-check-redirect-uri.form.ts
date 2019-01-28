import { WiziApiService } from '../../../services/wizi-api.service';
import { Observable } from 'rxjs';

export class OauthAppCheckRedirectUriForm {
  static submit(app_id: number, redirect_uri: string): Observable<boolean> {
    return WiziApiService.get<boolean>(`/oauth-app/check-redirect-uri/${app_id}`, {
      redirect_uri: redirect_uri
    });
  }
}
