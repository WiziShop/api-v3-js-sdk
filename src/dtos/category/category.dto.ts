export class CategoryDto {
  id: number;
  id_parent?: number;
  name: string;
  url: string;
  menu_title: string;
  visible: boolean;
  children?: CategoryDto[];
}
