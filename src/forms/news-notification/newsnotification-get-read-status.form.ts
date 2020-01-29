import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';

export class NewsnotificationGetReadStatusForm {
  static submit(userId: number): Observable<number> {
    return WiziApiService.get<number>(`/news-notification/${userId}/read`);
  }
}
