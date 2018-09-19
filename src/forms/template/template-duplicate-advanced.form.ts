import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { TemplateDto } from '../../dtos/template/template.dto';
import { TEMPLATE_TYPE_TWIG } from '../../models/setting-template.model';

export class TemplateDuplicateAdvancedForm {

  static submit(shopId: number, idTpl: number): Observable<TemplateDto> {

    return WiziApiService.post<TemplateDto>(`/shops/${shopId}/templates/duplicates/advanced`, {
      type: TEMPLATE_TYPE_TWIG,
      id_tpl: idTpl
    });
  }

}
