import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';
import { AccountInvoiceListDto } from '../../../dtos/account/invoice/account-invoice-list.dto';

export class AccountInvoicePayPostForm {
  static submit(acId: number, invoiceId: number): Observable<AccountInvoiceListDto> {
    return WiziApiService.post<AccountInvoiceListDto>(`/accounts/${acId}/invoices/${invoiceId}/pay-invoice`);
  }
}
