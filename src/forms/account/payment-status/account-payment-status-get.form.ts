import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';
import { AccountPaymentStatusDto } from '../../../dtos/account/payment-status/account-payment-status.dto';

export class AccountPaymentStatusGetForm {
  static submit(acId: number): Observable<AccountPaymentStatusDto> {
    return WiziApiService.get<AccountPaymentStatusDto>(`/accounts/${acId}/payment-status`);
  }
}
