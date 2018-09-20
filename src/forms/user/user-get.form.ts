import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { UserDto } from '../../dtos/user/user.dto';

export class UserGetForm {
  static submit(userId: number): Observable<UserDto> {
    return WiziApiService.get<any>(`/users/${userId}`);
  }
}
