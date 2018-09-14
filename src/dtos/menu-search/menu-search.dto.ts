export interface MenuSearchDto {
  text: string;
  url: string;
  children: MenuSearchDto[];
}
