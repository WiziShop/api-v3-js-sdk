export interface AccountUserDto {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  shop_id: number;
  role_type: 'owner' | 'in_charge' | 'admin' | 'editor' | 'logistician' | 'marketing_manager' | 'designer' | 'custom';
  acl_resources: any;
  created_at: string;
  updated_at: string;
}
