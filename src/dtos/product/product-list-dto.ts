export interface ProductListDto {
  id: number;
  sku: string;
  label: string;
  stock: null | number;
  weight: number;
  status: string;
}
