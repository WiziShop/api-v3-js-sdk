import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { FtpUserFolderDto } from '../../dtos/ftp/ftp-user-folder.dto';

export class FtpUserPasswordForm {

  static submit(shopId: number, idTpl: number, folderName: string): Observable<FtpUserFolderDto> {

    return WiziApiService.post<FtpUserFolderDto>(`/shops/${shopId}/ftp/user`, {name: folderName, id_tpl: idTpl});
  }
}
