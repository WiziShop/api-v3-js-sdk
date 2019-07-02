import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';

export class BrandsDistributionSetApiKeyForm {
  static submit(shopId: number, apiKey: string, password: string): Observable<boolean> {
    return WiziApiService.post<boolean>(`/shops/${shopId}/brandsdistribution`, {
      apiKey: apiKey,
      password: password
    });
  }
}
