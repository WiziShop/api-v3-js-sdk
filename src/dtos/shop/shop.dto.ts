import { PlanType } from '../../types/plan.type';

export interface ShopDto {
  id: number;
  account_id: number;
  group_id: number;
  name: string;
  locale: string;
  currency: string;
  is_dropizi: boolean;
  plan: PlanType;
  domain: string;
  url: string;
  phone?: string;
  zip_code?: string;
  city?: string;
  address?: string;
  logo_url?: string;
  has_tax?: boolean;
  template?: number;
}
