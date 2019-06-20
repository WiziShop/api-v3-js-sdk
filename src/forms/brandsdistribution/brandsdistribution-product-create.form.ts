import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';

export class BrandsDistributionProductCreateForm {
  static submit(shopId: number, id: number): Observable<boolean> {
    return WiziApiService.post<boolean>(`/shops/${shopId}/brandsdistributionProduct/${id}`);
  }
}
