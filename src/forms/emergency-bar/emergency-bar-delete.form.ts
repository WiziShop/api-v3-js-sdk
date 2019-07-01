import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { EmergencyBarDto } from '../../dtos/emergency-bar/emergency-bar.dto';

export class EmergencyBarDeleteForm {
  static submit(shopId: number): Observable<EmergencyBarDto> {
    return WiziApiService.delete<EmergencyBarDto>(`/shops/${shopId}/emergency-bar`);
  }
}
