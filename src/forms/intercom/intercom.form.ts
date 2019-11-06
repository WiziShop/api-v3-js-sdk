import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { IntercomDto } from '../../dtos/intercom/intercom.dto';

export class IntercomForm {
  static submit(shopId: number): Observable<IntercomDto> {
    return WiziApiService.get<IntercomDto>(`/shops/${shopId}/intercom`);
  }
}
