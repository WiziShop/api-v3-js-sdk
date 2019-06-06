export interface BusyXShippingOrdersDto {
  shippingOptions: Array<{
    shippingService: {
      id: number;
      delay: string;
      name: string;
    };
    cost: number;
  }>;
}
