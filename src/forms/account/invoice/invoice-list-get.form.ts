import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';
import { ListDto } from '../../../dtos/list.dto';
import { InvoiceListDto } from '../../../dtos/invoice/invoice-list.dto';

export class InvoiceListGetForm {
  static submit(acId: number, page: number, limit: number): Observable<ListDto<InvoiceListDto>> {
    return WiziApiService.get<ListDto<InvoiceListDto>>(`/accounts/${acId}/invoices?limit=` + limit + `&page=` + page);
  }
}
