import { WiziApiService } from '../../services/wizi-api.service';
import { Observable } from 'rxjs';
import { ProductFormStructure } from './product-create.form';
import { ProductDto } from '../../dtos/product/product.dto';

export class ProductSetForm {
  static submit(shopId: number, productId: number, product: ProductFormStructure): Observable<ProductDto> {
    return WiziApiService.put<ProductDto>(`/shops/${shopId}/products/${productId}`, product);
  }
}
