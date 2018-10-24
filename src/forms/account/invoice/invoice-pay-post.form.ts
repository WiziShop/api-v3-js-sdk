import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';
import { InvoiceListDto } from '../../../dtos/invoice/invoice-list.dto';

export class InvoicePayPostForm {
  static submit(acId: number, invoiceId: number): Observable<InvoiceListDto> {
    return WiziApiService.post<InvoiceListDto>(`/accounts/${acId}/invoices/${invoiceId}/pay-invoice`);
  }
}
