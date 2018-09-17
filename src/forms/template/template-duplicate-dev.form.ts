import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { TemplateFolderDto } from '../../dtos/template/template-folder.dto';

export class TemplateDuplicateDevForm {

  static submit(shopId: number, idTpl: number, name: string): Observable<TemplateFolderDto> {

    return WiziApiService.post<TemplateFolderDto>(`/shops/${shopId}/templates/duplicates/devs`, {name: name, id_tpl: idTpl});
  }

}
