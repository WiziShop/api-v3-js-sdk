import { CatalogPriceDto } from './catalog-price.dto';
import { CatalogImageDto } from './catalog-image.dto';
import { CatalogCategoryDto } from './catalog-category.dto';
import { CatalogBrandDto } from './catalog-brand.dto';

export class CatalogVariantOptionDto {
  id: string;
  opt_id_1: number;
  opt_id_2: number;
  label: string;
  sku: string;
  stock: number;
  weight: number;
  image: CatalogImageDto;
  is_active: boolean;
}
