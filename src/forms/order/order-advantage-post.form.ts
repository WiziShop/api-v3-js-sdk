import { Observable } from 'rxjs';
import { WiziApiService } from '../../services/wizi-api.service';
import { OrderAdvantageDto } from '../../dtos/order/order-advantage.dto';

export class OrderAdvantagePostForm {
  static submit(idShop: number, orderAdvantage: OrderAdvantageStructure): Observable<OrderAdvantageDto> {
    return WiziApiService.post<OrderAdvantageDto>(`/shops/${idShop}/order-advantage`, orderAdvantage);
  }
}

export class OrderAdvantageStructure {
  id_com: number;
  id_client: number;
  custom_text: string;
  total_amount: number;
  send_mail: boolean;
  orderAdvantageDetails: OrderAdvantageDetailStructure[];
}

export class OrderAdvantageDetailStructure {
  price_tax_excluded: number;
  tax: number;
  title: string;
}
