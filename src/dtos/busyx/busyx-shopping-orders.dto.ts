export interface BusyXShippingOrdersDto {
  shipping_options: Array<{
    shipping_service: {
      id: number;
      delay: string;
      name: string;
    };
    cost: number;
  }>;
}
