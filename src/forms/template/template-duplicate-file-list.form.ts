import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { TemplateFileModel } from '../../models/setting-template.model';

export class TemplateDuplicateFileListForm {

    static submit(shopId: number, idTpl: number): Observable<TemplateFileModel[]> {

        return WiziApiService.get<TemplateFileModel[]>(`/shops/${shopId}/templates/duplicates/${idTpl}/files`);
    }

}
