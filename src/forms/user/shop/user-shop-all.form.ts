import { WiziApiService } from '../../../services/wizi-api.service';
import { UserShopDto } from '../../../dtos/user/shop/user-shop.dto';
import { Observable } from 'rxjs';

export class UserShopAllForm {
  static submit(userId: number): Observable<UserShopDto[]> {
    return WiziApiService.get<UserShopDto[]>(`/users/${userId}/shops`);
  }
}
