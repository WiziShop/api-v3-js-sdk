export class FormInfosDto {
  id: number;
  title: string;
  email: string;
  thanks_text: string;
  submit_label: string;
  date: Date;
  active: boolean;
  type: string;
  deletable: boolean;
  pages: Array<string>;
}
