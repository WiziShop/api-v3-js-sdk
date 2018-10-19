import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';
import { InvoiceListDto } from '../../..';

export class InvoicePayPostForm {
  static submit(acId: number, invoiceId: number): Observable<InvoiceListDto> {
    return WiziApiService.put<InvoiceListDto>(`/accounts/${acId}/invoices/${invoiceId}/pay-invoice`);
  }
}
