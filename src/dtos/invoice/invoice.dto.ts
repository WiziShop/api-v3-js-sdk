import { InvoiceDetailsDto } from './invoice-details.dto';

export interface InvoiceDto {
  id: number;
  account_id: number;
  total_price_tax_excluded: number;
  tax_percent: number;
  type: string;
  status: string;
  created_at: Date;
  paid_at: Date;
  due_at: Date;
  invoiced_to_name: string;
  invoiced_to_address: string;
  invoiced_to_vat_number: number;
  invoiced_by_name: string;
  invoiced_by_description: string;
  invoice_details: Array<InvoiceDetailsDto>;
}
