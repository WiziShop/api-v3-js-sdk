import { WiziApiService } from '../../services/wizi-api.service';
import { Observable } from 'rxjs';
import { ProductDto } from '../../dtos/product/product.dto';

export class ProductGetForm {
  static submit(shopId: number, prodId: number): Observable<ProductDto> {
    return WiziApiService.get<ProductDto>(`/shops/${shopId}/products/${prodId}`);
  }
}
