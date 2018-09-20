export interface OrderDto {
  id: number;
  public_id: string;
  shipping_address: {
    lastname: string;
    firstname: string;
    phone: string;
    street: string;
    company: string;
    postal_code: string;
    town: string;
    country: string;
    country_iso: string;
    email: string;
  };
  shippings: [
    {
      id: number;
      skus: [
        {
          title: string;
          sku: string;
          quantity: number;
          variations: [
            {
              title: string;
              sku: string;
              quantity: number;
            }
          ];
        }
      ];
    }
  ];
}
