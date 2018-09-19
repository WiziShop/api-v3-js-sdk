import { WiziApiService } from '../../services/wizi-api.service';
import { Observable } from 'rxjs';

export class ProductDeleteForm {
  static submit(shopId: number, productId: number): Observable<any> {
    return WiziApiService.delete<any>(`/shops/${shopId}/products/${productId}`);
  }
}
