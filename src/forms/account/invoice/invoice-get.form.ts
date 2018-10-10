import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';
import { InvoiceDto } from '../../../dtos/invoice/invoice.dto';

export class InvoiceGetForm {
  static submit(acId: number, invoiceId: number): Observable<InvoiceDto> {
    return WiziApiService.get<InvoiceDto>(`/accounts/${acId}/invoices/${invoiceId}`);
  }
}
