import { CommentDto } from './comment.dto';

export class CommentListDto {
  page: number;
  limit: number;
  pages: number;
  total: number;
  results: CommentDto[];
}
