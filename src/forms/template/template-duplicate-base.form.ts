import { Observable } from 'rxjs';
import { TemplateDto } from '../../dtos/template/template.dto';
import { WiziApiService } from '../../services/wizi-api.service';
import { TEMPLATE_TYPE_TWIG } from '../../models/setting-template.model';

export class TemplateDuplicateBaseForm {

  static submit(shopId: number, idTpl: number): Observable<TemplateDto> {

    return WiziApiService.post<TemplateDto>(`/shops/${shopId}/templates/duplicates`, {type: TEMPLATE_TYPE_TWIG, id_tpl: idTpl});
  }

}
