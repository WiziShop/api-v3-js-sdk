import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { AmplifyDto } from '../../dtos/amplify/amplify.dto';

export class AmplifyGetForm {
  static submit(acId: number): Observable<AmplifyDto> {
    return WiziApiService.get<AmplifyDto>(`/amplify/${acId}`);
  }
}
