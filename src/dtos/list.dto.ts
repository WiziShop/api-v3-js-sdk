export interface ListDto<T> {
  page: number;
  limit: number;
  pages: number;
  total: number;
  results: T[];
}
