import { GraphDto } from '../graph/graph.dto';

export interface TemplateDto {
  tpl_id: number;
  tpl_choice: string;
  tpl_date: Date;
  tpl_name: string;
  tpl_image: string;
  tpl_customizable: boolean;
  tpl_has_vertical_menu: boolean;
  tpl_default_vertical_menu: boolean;
  tpl_default_align_menu: boolean;
  tpl_responsive: boolean;
  tpl_twig: boolean;
  tpl_order: number;
  is_advanced: boolean;
  is_custom: boolean;
  graph: GraphDto;
}
