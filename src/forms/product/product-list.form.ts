import { WiziApiService } from '../../services/wizi-api.service';
import { ListDto } from '../../dtos/list.dto';
import { ProductListDto } from '../../dtos/product/product-list-dto';
import { Observable } from 'rxjs';

export class ProductListForm {
  static submit(
    shopId: number,
    params: {
      limit?: number;
      page?: number;
      status?: 'draft' | 'scheduled' | 'visible' | 'hidden' | 'unavailable';
      sku?: string;
      sort?: string;
    }
  ): Observable<ListDto<ProductListDto>> {
    return WiziApiService.get<ListDto<ProductListDto>>(`/shops/${shopId}/products`, params);
  }
}
