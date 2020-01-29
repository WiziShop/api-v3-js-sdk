import { UpsellStepDto } from './upsell-step.dto';

export interface UpsellDetailDto {
  title: string;
  enabled: boolean;
  first_step: UpsellStepDto;
}
