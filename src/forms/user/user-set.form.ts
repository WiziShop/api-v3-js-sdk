import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { UserDto } from '../../dtos/user/user.dto';

export class UserSetForm {
  static submit(
    userId: number,
    email: string,
    last_name: string,
    first_name: string
  ): Observable<UserDto> {
    return WiziApiService.put<UserDto>(`/users/${userId}`, {
      email,
      last_name,
      first_name
    });
  }
}
