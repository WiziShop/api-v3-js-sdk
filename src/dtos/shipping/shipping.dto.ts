export class ShippingDto {
  id_shipping: number;
  shipping_mode: number;
  shipping_type: number;
  shipping_amount_type: number;
  shipping_free_from: string;
  shipping_name_lang: string;
  shipping_price_band: {
    min_price: string;
    max_price: string;
  };
  shipping_countries: [];
  url_file: string;
  shipping_emc: boolean;
}
