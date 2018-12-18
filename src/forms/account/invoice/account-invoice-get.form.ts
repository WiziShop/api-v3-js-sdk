import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';
import { AccountInvoiceDto } from '../../../dtos/account/invoice/account-invoice.dto';

export class AccountInvoiceGetForm {
  static submit(acId: number, invoiceId: number): Observable<AccountInvoiceDto> {
    return WiziApiService.get<AccountInvoiceDto>(`/accounts/${acId}/invoices/${invoiceId}`);
  }
}
