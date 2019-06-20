import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { BusyXPaymentListDto } from '../../dtos/busyx/busyx-payment-list.dto';

export class BusyXPaymentListForm {
  static submit(shopId: number, contryIso: string): Observable<BusyXPaymentListDto[]> {
    return WiziApiService.get<BusyXPaymentListDto[]>(`/shops/${shopId}/busyx/payment-list/${contryIso}`);
  }
}
