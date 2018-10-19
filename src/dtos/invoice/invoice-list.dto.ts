export interface InvoiceListDto {
  id: number;
  invoice_number: string;
  ac_id: number;
  status: string;
  created_at: Date;
  paid_at: Date;
  due_at: Date;
  type: string;
  total_price_tax_excluded: string;
  tax_percent: number;
  invoiced_by_description: string;
  invoiced_by_name: string;
  invoiced_to_address: string;
  invoiced_to_name: string;
  invoiced_to_vat_number: number;
}
