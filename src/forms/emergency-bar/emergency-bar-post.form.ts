import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { EmergencyBarDto } from '../../dtos/emergency-bar/emergency-bar.dto';

export class EmergencyBarPostForm {
  static submit(
    shopId: number,
    color: string,
    pattern: string,
    text: string,
    button_text: string,
    button_color: string,
    button_color_text: string,
    button_link: string,
    placement: string,
    page: string,
    preview: boolean
  ): Observable<EmergencyBarDto> {
    return WiziApiService.post<EmergencyBarDto>(`/shops/${shopId}/emergency-bar`, {
      color: color,
      pattern: pattern,
      text: text,
      button_text: button_text,
      button_color: button_color,
      button_color_text: button_color_text,
      button_link: button_link,
      placement: placement,
      page: page,
      preview: preview
    });
  }
}
