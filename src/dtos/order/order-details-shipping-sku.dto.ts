export interface OrderDetailsShippingSkuDto {
  customisations: any[];
  id: number;
  image_url: string;
  price: number;
  quantity: number;
  sku: string;
  tax: number;
  total_discount: number;
  title: string;
  variations: [
    {
      title: string;
      sku: string;
      quantity: number;
    }
  ];
}
