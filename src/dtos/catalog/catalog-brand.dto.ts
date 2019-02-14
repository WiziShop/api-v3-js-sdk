import { CatalogImageDto } from './catalog-image.dto';

export class CatalogBrandDto {
  id: number;
  label: string;
  url: string;
  image: CatalogImageDto;
}
