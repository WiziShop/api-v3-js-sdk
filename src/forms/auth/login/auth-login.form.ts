import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';
import { AuthLoginDto } from '../../../dtos/auth/login/auth-login.dto';

export class AuthLoginForm {
  static submit(username: string, password: string): Observable<AuthLoginDto> {
    return WiziApiService.post<AuthLoginDto>('/auth/login', {
      username: username,
      password: password
    });
  }
}
