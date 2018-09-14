import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';

import { SidebarDto } from '../../dtos/sidebar/sidebar.dto';


export class SidebarGetForm {


  static submit(url: string, shopId: number): Observable<SidebarDto[]> {
    return WiziApiService.get<SidebarDto[]>(`/shops/${shopId}/side-bar?url=${url}`);

  }

}
