export interface ProductDto {
  id: number;
  category_id: number;
  other_categories_id: number[];
  sku: string;
  name: string;
  description: string;
  short_description: string;
  brand: string;
  ean13: string;
  isbn: string;
  supplier: string;
  supplier_reference: string;
  tags: string[];
  features: string[];
  tax: number;
  weight: number;
  quantity: number;
  price_tax_excluded: number;
  wholesale_price_tax_excluded: number;
  reduction: number;
  reduction_type: 'percentage' | 'amount';
  reduction_from;
  reduction_to;
  images: string[];
  visible: boolean;
  url: string;
  attributes: ProductVariantDto[];
  cross_selling_products_id: number[];
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  customizations: string[];
  complete: boolean;
}

export interface ProductVariantDto {
  name: string;
  label: string;
  options: ProductVariantOptionDto[];
}

export interface ProductVariantOptionDto {
  value: string;
  sku: string;
  ean13: string;
  weight: number;
  quantity: number;
  price_tax_excluded: number;
  reduction: number;
  reduction_type: 'percentage' | 'amount';
  image: string;
  active: boolean;
  default: boolean;
}
