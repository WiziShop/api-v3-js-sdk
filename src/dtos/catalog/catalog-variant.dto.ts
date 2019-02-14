import { CatalogPriceDto } from './catalog-price.dto';
import { CatalogImageDto } from './catalog-image.dto';
import { CatalogCategoryDto } from './catalog-category.dto';
import { CatalogBrandDto } from './catalog-brand.dto';
import { CatalogVariantOptionDto } from './catalog-variant-option.dto';

export class CatalogVariantDto {
  id: number;
  var_id_1: number;
  var_id_2: number;
  label: string;
  options: Array<CatalogVariantOptionDto>;
}
