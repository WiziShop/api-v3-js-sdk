export interface ShopDto {
  id: number;
  account_id: number;
  name: string;
  locale: string;
  currency: string;
  is_dropizi: boolean;
  plan: string;
  domain: string;
  url: string;
  phone?: string;
  zip_code?: string;
  city?: string;
  address?: string;
  logo_url?: string;
}
