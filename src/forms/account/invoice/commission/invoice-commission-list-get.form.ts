import { Observable } from 'rxjs';
import { WiziApiService } from '../../../../services/wizi-api.service';
import { ListDto } from '../../../../dtos/list.dto';
import { InvoiceCommissionListDto } from '../../../../dtos/invoice/Commission/invoice-commission-list.dto';

export class InvoiceCommissionListGetForm {
  static submit(acId: number, invoiceId: number, page: number, limit: number): Observable<ListDto<InvoiceCommissionListDto>> {
    return WiziApiService.get<ListDto<InvoiceCommissionListDto>>(
      `/accounts/${acId}/invoices/${invoiceId}?limit=` + limit + `&page=` + page
    );
  }
}
