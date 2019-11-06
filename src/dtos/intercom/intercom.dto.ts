export interface IntercomDto {
  app_id: string;
  id: number;
  email: string;
  hash: string;
  civility: string;
  firstname: string;
  lastname: string;
  created: number;
  shop_created: number;
  shop_opened: number;
  shop_invoice: number;
  accept_mails: number;
  shop: {
    id: number;
    name: string;
    service: string;
    created: number;
    url: string;
    country: string;
    currency: string;
    template: string;
    db: string;
    status: string;
    filter: number;
    predictive: number;
    spread: number;
    dpd_livr: number;
  };
  active: boolean;
}
