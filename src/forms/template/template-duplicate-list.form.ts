import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { TemplateFolderDto } from '../../dtos/template/template-folder.dto';

export class TemplateDuplicateListForm {

  static submit(shopId: number, idTpl: number): Observable<TemplateFolderDto[]> {

    return WiziApiService.get<TemplateFolderDto[]>(`/shops/${shopId}/templates/duplicates/${idTpl}`);
  }

}
