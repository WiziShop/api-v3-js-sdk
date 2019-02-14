import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { FormInfosDto } from '../../dtos/form/form-infos.dto';
import { FormDetailsDto } from '../../dtos/form/form-details.dto';

export class FormDetailsForm {
  static submit(shopId: number, idForm: number): Observable<Array<FormDetailsDto>> {
    return WiziApiService.get<Array<FormDetailsDto>>(`/shops/${shopId}/forms/${idForm}`);
  }
}
