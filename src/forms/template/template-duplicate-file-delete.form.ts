import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { TemplateFileDto } from '../../dtos/template/template-file.dto';

export class TemplateDuplicateFileDeleteForm {

  static submit(shopId: number, idTpl: number, file: string): Observable<TemplateFileDto> {

    return WiziApiService.delete<TemplateFileDto>(`/shops/${shopId}/templates/duplicates/${idTpl}/files/${file}`);
  }

}
