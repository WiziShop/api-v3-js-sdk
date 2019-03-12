import { WiziApiService } from '../../services/wizi-api.service';
import { Observable } from 'rxjs';
import { CommentListDto } from '../../dtos/comment/comment-list.dto';
import { CommentDto } from '../../dtos/comment/comment.dto';

export class ProductCommentCreateForm {
  static submit(shopId: number, productId: number, productComment: ProductCommentCreateStructure): Observable<CommentDto> {
    return WiziApiService.post<CommentDto>(`/shops/${shopId}/comments/products/${productId}/comments`, productComment);
  }
}

export class ProductCommentCreateStructure {
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
