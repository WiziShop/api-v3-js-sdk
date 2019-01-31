import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { TemplateDto } from '../../dtos/template/template.dto';

export class TemplateCustomColorsForm {
  static submit(shopId: number, primary: string, secondary: string, background: string): Observable<TemplateDto> {
    return WiziApiService.post<TemplateDto>(`/shops/${shopId}/templates/customs/colors`, {
      primary: primary,
      background: background,
      secondary: secondary
    });
  }
}
