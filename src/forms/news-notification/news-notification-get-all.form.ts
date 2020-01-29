import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { NewsNotificationDTO } from '../../dtos/news-notification/news-notification.dto';

export class NewsNotificationGetAllForm {
  static submit(): Observable<NewsNotificationDTO> {
    return WiziApiService.get<NewsNotificationDTO>(`/news-notification`);
  }
}
