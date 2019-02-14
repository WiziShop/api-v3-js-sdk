import { CatalogFacetValueDto } from './catalog-facet-value.dto';

export class CatalogFacetDto {
  filter_id: number;
  label: string;
  total: number;
  type: string;
  display: string;
  values: Array<CatalogFacetValueDto>;
  max_integer_value: number;
  min_integer_value: number;
}
