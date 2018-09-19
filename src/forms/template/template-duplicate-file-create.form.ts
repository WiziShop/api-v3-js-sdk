import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { TemplateFileContentDto } from '../../dtos/template/template-file-content.dto';

export class TemplateDuplicateFileCreateForm {


  static submit(shopId: number, idTpl: number, file: string, templateFileContents): Observable<TemplateFileContentDto[]> {

    return WiziApiService.post<TemplateFileContentDto[]>(`/shops/${shopId}/templates/duplicates/${idTpl}/files/${file}`, {'contents': templateFileContents});
  }

}
