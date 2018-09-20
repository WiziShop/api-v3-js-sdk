export interface OrderDto {
  id: number;
  public_id: string;
  date: string;
  status_text: string;
  status_code: number;
  comment: string;
  currency: string;
  total_amount: number;
  total_amount_excl_tax: number;
  total_products_amount: number;
  total_shipping_amount: number;
  total_reduc_amount: number;
  total_fees: number;
  payment_mode: number;
  payment_type: number;
  payment_label: string;
  transaction_number: string;
  number_of_products: number;
  weight: number;
  invoice_id: number;
  invoice_url: string;
  picking_slip_url: string;
  delivery_slip_url: string;
  origin: string;
  tag: string;
  customer_id: number;
  third_party_id: string;
  third_party_from: string;
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
  services: {
    offer: boolean;
    gift_wrap: boolean;
    sms: boolean;
    message: string;
  };
}
