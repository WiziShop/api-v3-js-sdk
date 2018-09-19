import { Observable } from 'rxjs';
import { TemplateDto } from '../../dtos/template/template.dto';
import { WiziApiService } from '../../services/wizi-api.service';

export class TemplateValidateDevForm {

  static submit(shopId: number, idTpl: number, folderName: string): Observable<TemplateDto> {

    return WiziApiService.post<TemplateDto>(`/shops/${shopId}/templates/duplicates/validates`, {
      name: folderName,
      id_tpl: idTpl
    });
  }

}
