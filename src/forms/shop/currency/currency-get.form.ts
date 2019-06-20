import { Observable } from 'rxjs';
import { WiziApiService } from '../../../services/wizi-api.service';
import { CurrencyDto } from '../../../dtos/currency/currency.dto';

export class CurrencyGetForm {
  static submit(idShop: number): Observable<CurrencyDto> {
    return WiziApiService.get<CurrencyDto>(`/shops/${idShop}/currency`);
  }
}
