import { CommentDto } from './comment.dto';

export class CommentListDto {
  page: number;
  limit: number;
  pages: number;
  total: number;
  total_note: number;
  results: CommentDto[];
}
