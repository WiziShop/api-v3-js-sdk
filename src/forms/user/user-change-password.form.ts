import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';


export class UserChangePasswordForm {


  static submit(userId: number, current_password: string, new_password: string): Observable<boolean> {
    return WiziApiService.put<boolean>(`/users/${userId}/change-password`, {
      current_password,
      new_password
    });
  }

}
