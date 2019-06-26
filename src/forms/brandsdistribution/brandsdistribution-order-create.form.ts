import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';

export class BrandsDistributionOrderCreateForm {
  static submit(shopId: number, id: number, key: string, password: string): Observable<string> {
    return WiziApiService.post<string>(`/shops/${shopId}/brandsdistributionOrder/${id}`, {
      key: key,
      password: password
    });
  }
}
