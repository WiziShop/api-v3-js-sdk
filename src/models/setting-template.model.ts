import { TemplateFileContentDto } from '../dtos/template/template-file-content.dto';
import { TemplateFileDto } from '../dtos/template/template-file.dto';
import { TemplateFolderDto } from '..';

export const TEMPLATE_ADVANCED_TWIG_FOLDER = 'advancedtwig';

export const TEMPLATE_TYPE_TWIG = 'twig';
export const TEMPLATE_TYPE_OTHER = 'other';

export const TEMPLATE_FILE_TYPE_ELEMENT = 'element';
export const TEMPLATE_FILE_TYPE_MACRO = 'macro';
export const TEMPLATE_FILE_TYPE_PAGE = 'page';

export const TEMPLATE_FILE_STATUS_UNTOUCH = 'untouch';
export const TEMPLATE_FILE_STATUS_EDITED = 'edited';
export const TEMPLATE_FILE_STATUS_UPDATE = 'toupdate';

export class TemplateFileModel implements TemplateFileDto {
    name: string;
    filename: string;
    status: string;
    type: string;
    contents: Array<TemplateFileContentDto> = [];
}

export class TemplateFolderModel implements TemplateFolderDto {
    name: string;
    ftp_user_id: string;
    ftp_user_pass: string;
}

