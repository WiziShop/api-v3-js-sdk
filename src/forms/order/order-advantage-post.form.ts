import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { OrderAdvantageDto } from '../../dtos/order/order-advantage.dto';

export class OrderAdvantagePostForm {
  static submit(idShop: number, storeCredit: StoreCreditStructure): Observable<OrderAdvantageDto> {
    return WiziApiService.post<OrderAdvantageDto>(`/shops/${idShop}/store-credits`, storeCredit);
  }
}

export class StoreCreditStructure {
  id_com: number;
  id_client: number;
  custom_text: string;
  total_amount: number;
  send_mail: boolean;
  sc_preview: boolean;
  storeCreditDetails: StoreCreditDetailStructure[];
}

export class StoreCreditDetailStructure {
  price_tax_excluded: number;
  tax: number;
  price: number;
  title: string;
}
