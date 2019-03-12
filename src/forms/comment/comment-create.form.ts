import { WiziApiService } from '../../services/wizi-api.service';
import { Observable } from 'rxjs';
import { CommentListDto } from '../../dtos/comment/comment-list.dto';

export class CommentCreateForm {
  static submit(shopId: number, comment: CommentCreateStructure): Observable<CommentListDto> {
    return WiziApiService.post<CommentListDto>(`/shops/${shopId}/comments`, comment);
  }
}

export class CommentCreateStructure {
  author: string;
  email: string;
  url: string;
  content: string;
  note: number;
  customer?: number;
  valid?: boolean;
  select?: boolean;
  banned?: false;
  created_at: Date;
  ip_address: string;
}
