import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { FormInfosDto } from '../../dtos/form/form-infos.dto';

export class FormInfosForm {
  static submit(shopId: number): Observable<Array<FormInfosDto>> {
    return WiziApiService.get<Array<FormInfosDto>>(`/shops/${shopId}/forms`);
  }
}
