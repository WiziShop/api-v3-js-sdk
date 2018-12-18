import { AccountInvoiceDetailsDto } from './account-invoice-details.dto';

export interface AccountInvoiceDto {
  id: number;
  account_id: number;
  total_price_tax_excluded: number;
  tax_percent: number;
  type: string;
  status: string;
  created_at: string;
  paid_at: string;
  due_at: string;
  levy_start_at: string;
  invoiced_to_name: string;
  invoiced_to_address: string;
  invoiced_to_vat_number: number;
  invoiced_by_name: string;
  invoiced_by_description: string;
  invoice_details: AccountInvoiceDetailsDto[];
}
