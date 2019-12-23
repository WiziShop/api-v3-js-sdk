import { WiziApiService } from '../../services/wizi-api.service';
import { Observable } from 'rxjs';

export class DiscountGetTitleForm {
  static submit(idShop: number, title: string): Observable<boolean> {
    return WiziApiService.get<boolean>(`/shops/${idShop}/discount/title/${title}`);
  }
}
