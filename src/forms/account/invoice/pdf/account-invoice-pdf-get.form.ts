import { Observable } from 'rxjs';
import { WiziApiService } from '../../../../services/wizi-api.service';

export class AccountInvoicePdfGetForm {
  static submit(acId: number, invoiceId: number): Observable<Blob> {
    return WiziApiService.request<Blob>(`/accounts/${acId}/invoices-pdf/${invoiceId}`, {
      method: 'GET',
      responseType: 'blob',
      headers: {
        'Content-Type': 'application/pdf'
      }
    });
  }
}
