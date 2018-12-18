import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';
import { ListDto } from '../../../dtos/list.dto';
import { AccountInvoiceListDto } from '../../../dtos/account/invoice/account-invoice-list.dto';

export class AccountInvoiceListGetForm {
  static submit(acId: number, page: number, limit: number): Observable<ListDto<AccountInvoiceListDto>> {
    return WiziApiService.get<ListDto<AccountInvoiceListDto>>(`/accounts/${acId}/invoices?limit=` + limit + `&page=` + page);
  }
}
