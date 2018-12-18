import { Observable } from 'rxjs';
import { WiziApiService } from '../../../../services/wizi-api.service';
import { ListDto } from '../../../../dtos/list.dto';
import { AccountInvoiceCommissionListDto } from '../../../../dtos/account/invoice/commission/account-invoice-commission-list.dto';

export class AccountInvoiceCommissionListGetForm {
  static submit(acId: number, invoiceId: number, page: number, limit: number): Observable<ListDto<AccountInvoiceCommissionListDto>> {
    return WiziApiService.get<ListDto<AccountInvoiceCommissionListDto>>(
      `/accounts/${acId}/invoices/${invoiceId}/commissions?limit=` + limit + `&page=` + page
    );
  }
}
