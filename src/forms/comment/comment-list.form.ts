import { WiziApiService } from '../../services/wizi-api.service';
import { Observable } from 'rxjs';
import { CommentListDto } from '../../dtos/comment/comment-list.dto';

export class CommentListForm {
  static submit(
    shopId: number,
    params: {
      limit?: number;
      page?: number;
      sort?: 'desc' | 'asc';
    }
  ): Observable<CommentListDto> {
    return WiziApiService.get<CommentListDto>(`/shops/${shopId}/comments`, params);
  }
}
