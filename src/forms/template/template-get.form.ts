import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { TemplateDto } from '../../dtos/template/template.dto';

export class TemplateGetForm {

  static submit(shopId: number): Observable<TemplateDto> {
    return WiziApiService.get<TemplateDto>(`/shops/${shopId}/templates`);
  }

}
