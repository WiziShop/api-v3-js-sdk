import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { UserDto } from '../../dtos/user/user.dto';

export class UserCreateForm {
  static submit(email: string, last_name: string, first_name: string, password: string): Observable<UserDto> {
    return WiziApiService.post<UserDto>(`/users`, {
      email: email,
      last_name: last_name,
      first_name: first_name,
      password: password
    });
  }
}
