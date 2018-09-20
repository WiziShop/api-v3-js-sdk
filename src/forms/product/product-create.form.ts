import { WiziApiService } from '../../services/wizi-api.service';
import { Observable } from 'rxjs';
import { ProductDto } from '../../dtos/product/product.dto';

export class ProductCreateForm {
  static submit(
    shopId: number,
    product: ProductFormStructure
  ): Observable<ProductDto> {
    return WiziApiService.post<ProductDto>(
      `/shops/${shopId}/products`,
      product
    );
  }
}

export class ProductFormStructure {
  category_id: number;
  other_categories_id = [];
  sku: string;
  name: string;
  description: string;
  short_description: string;
  brand: string;
  ean13 = '';
  isbn = '';
  supplier: string = null;
  supplier_reference: string = null;
  tags = [];
  features = [];
  tax = 0;
  weight = 0;
  quantity: number;
  price_tax_excluded = 0;
  wholesale_price_tax_excluded = 0;
  reduction = 0;
  reduction_type: 'percentage' | 'amount' = 'percentage';
  reduction_from;
  reduction_to;
  images = [];
  visible = true;
  url = '';
  attributes: ProductVariantFormStructure[] = [];
  cross_selling_products_id = [];
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  customizations = [];
  complete = false;
}

export class ProductVariantFormStructure {
  name = '';
  label = '';
  options: ProductVariantOptionFormStructure[] = [];
}

export class ProductVariantOptionFormStructure {
  value: string;
  sku: string;
  ean13: string;
  weight: number;
  quantity: number;
  price_tax_excluded: number = null;
  reduction = 0;
  reduction_type: 'percentage' | 'amount' = 'percentage';
  image: string;
  active = true;
  default = false;
}
