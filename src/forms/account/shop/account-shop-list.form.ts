import { WiziApiService } from '../../../services/wizi-api.service';
import { ListDto } from '../../../dtos/list.dto';
import { Observable } from 'rxjs';
import { ShopListDto } from '../../../dtos/shop/shop-list.dto';


export class AccountShopListForm {


  static submit(acId: number): Observable<ListDto<ShopListDto>> {
    return WiziApiService.get<ListDto<ShopListDto>>(`/accounts/${acId}/shops`);
  }

}
