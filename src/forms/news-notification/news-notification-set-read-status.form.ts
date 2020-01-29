import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { NewsNotificationReadDTO } from '../../dtos/news-notification/news-notification-read.dto';

export class NewsNotificationSetReadStatusForm {
  static submit(userId: number): Observable<NewsNotificationReadDTO> {
    return WiziApiService.post<NewsNotificationReadDTO>(`/news-notification/${userId}/read`);
  }
}
