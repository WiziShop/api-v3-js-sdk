import { WiziApiService } from '../../services/wizi-api.service';
import { Observable } from 'rxjs';

export class DiscountGetTagForm {
  static submit(idShop: number, tag: string): Observable<boolean> {
    return WiziApiService.get<boolean>(`/shops/${idShop}/discount/tag/${tag}`);
  }
}
