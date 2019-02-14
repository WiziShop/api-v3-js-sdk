import { CatalogDto } from './catalog.dto';
import { CatalogFacetDto } from './catalog-facet.dto';

export class CatalogListDto {
  products: Array<CatalogDto>;
  catalog_facet: Array<CatalogFacetDto>;
}
