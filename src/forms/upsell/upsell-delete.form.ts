import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';

export class UpsellDeleteForm {
  static submit(shopId: number, prodUpsellId: number): Observable<string> {
    return WiziApiService.delete<string>(`/shops/${shopId}/prod-upsell/${prodUpsellId}`);
  }
}
