import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';

export class OrderThirdPartyOrderIdSetForm {
  static submit(
    shopId: number,
    orderId: number,
    thirdPartyOrderId: string,
    thirdPartyOrderForm: string
  ): Observable<any> {
    return WiziApiService.put(
      `/shops/${shopId}/orders/${orderId}/third-party-order-id`,
      {
        order_id: thirdPartyOrderId,
        order_form: thirdPartyOrderForm
      }
    );
  }
}
