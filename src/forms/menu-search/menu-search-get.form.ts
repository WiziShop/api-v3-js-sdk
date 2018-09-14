import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';

import { MenuSearchDto } from '../../dtos/menu-search/menu-search.dto';


export class MenuSearchGetForm {


  static submit(shopId: number): Observable<MenuSearchDto[]> {
    return WiziApiService.get<MenuSearchDto[]>(`/shops/${shopId}/menu-search`);
  }

}
