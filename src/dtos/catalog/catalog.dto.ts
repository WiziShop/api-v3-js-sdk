import { CatalogPriceDto } from './catalog-price.dto';
import { CatalogImageDto } from './catalog-image.dto';
import { CatalogCategoryDto } from './catalog-category.dto';
import { CatalogBrandDto } from './catalog-brand.dto';
import { CatalogVariantDto } from './catalog-variant.dto';
import { CatalogBadgesDto } from './catalog-badges.dto';

export class CatalogDto {
  objectID: string;
  id: number;
  id_shop: number;
  name: string;
  sku: string;
  sku_supplier: string;
  stock_max: number;
  is_new: boolean;
  end_new_date: Date;
  total_comments: number;
  rate: number;
  percent_rate: number;
  url: string;
  description: string;
  summary: string;
  feature: string;
  state: string;
  price: CatalogPriceDto;
  price_inverted: CatalogPriceDto;
  tax_id: number;
  eco_tax: number;
  type_discount: string;
  display_discount: string;
  end_date_discount: Date;
  created_at: number;
  published_at: number;
  main_image: CatalogImageDto;
  other_images: Array<CatalogImageDto>;
  category: CatalogCategoryDto;
  categories: Array<CatalogCategoryDto>;
  brand: CatalogBrandDto;
  tags: string;
  variants: Array<CatalogVariantDto>;
  badges: Array<CatalogBadgesDto>;
  has_custom: boolean;
  publish_algolia_date: number;
}