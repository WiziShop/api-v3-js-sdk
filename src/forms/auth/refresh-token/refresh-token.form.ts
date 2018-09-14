import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';
import { RefreshTokenDto } from '../../../dtos/auth/refresh-token/refresh-token.dto';


export class RefreshTokenForm {


  static submit(): Observable<RefreshTokenDto> {
    return WiziApiService.get<RefreshTokenDto>('/auth/refresh_token');
  }

}
