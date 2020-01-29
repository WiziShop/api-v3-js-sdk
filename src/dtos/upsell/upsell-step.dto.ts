import { ProductDto } from '../product/product.dto';

export interface UpsellStepDto {
  id: number;
  product: ProductDto;
  id_prod: number;
  title: string;
  text: string;
  price: number;
  timer: number;
  accept: UpsellStepDto;
  decline: UpsellStepDto;
  accept_id: number;
  decline_id: number;
}
