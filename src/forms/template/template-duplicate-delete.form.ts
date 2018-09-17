import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { TemplateFolderDto } from '../../dtos/template/template-folder.dto';

export class TemplateDuplicateDeleteForm {

  static submit(shopId: number, idTpl: number, folderName: string): Observable<TemplateFolderDto[]> {

    return WiziApiService.delete<TemplateFolderDto[]>(`/shops/${shopId}/templates/${idTpl}/devs/${folderName}`);
  }

}
