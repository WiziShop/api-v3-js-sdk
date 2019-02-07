export interface OauthUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
}

export interface OauthUserApp {
  id: number;
  shop_id: number;
  account_id: number;
  access_token: string;
  token_type: string;
}

export interface OauthAppTokenDto {
  user: OauthUser;
  user_app: OauthUserApp;
}
