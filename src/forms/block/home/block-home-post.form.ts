import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';
import { BlockHomeDto } from '../../../dtos/block/home/block-home.dto';

export class BlockHomePostForm {
  static submit(
    shopId: number,
    title: string,
    og_title: string,
    description: string,
    json_content: string,
    preview: boolean
  ): Observable<BlockHomeDto> {
    return WiziApiService.post<BlockHomeDto>(`/shops/${shopId}/block-home`, {
      title: title,
      og_title: og_title,
      description: description,
      json_content: json_content,
      preview: preview
    });
  }
}
