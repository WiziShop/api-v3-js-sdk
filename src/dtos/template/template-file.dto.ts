import { TemplateFileContentDto } from './template-file-content.dto';

export interface TemplateFileDto {
  name: string;
  filename: string;
  status: string;
  type: string;
  contents: Array<TemplateFileContentDto>;
}

