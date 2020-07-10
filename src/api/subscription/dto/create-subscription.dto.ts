import { ApiModelProperty } from "@nestjs/swagger";

export class ShippingLines {
  @ApiModelProperty({ description: 'method_id', example: 'flat_rate' })
  method_id: string;
  @ApiModelProperty({ description: 'method_title', example: 'Flat Rate' })
  method_title: string;
  @ApiModelProperty({ description: 'total', example: '10' })
  total: string;
}

export class LineItems {

  @ApiModelProperty({ description: 'product_id', example: 22 })
  product_id: number;
  @ApiModelProperty({ description: 'variation_id', example: 23 })
  variation_id: string;
  @ApiModelProperty({ description: 'quantity', example: 1 })
  quantity: 1

}

export class Shipping {

  @ApiModelProperty({ description: 'first_name', example: 'John' })
  first_name: string;
  @ApiModelProperty({ description: 'last_name', example: 'Doe' })
  last_name: string;
  @ApiModelProperty({ description: 'Product id', example: '267' })
  @ApiModelProperty({ description: 'address_1', example: '969 Market' })
  address_1: string
  @ApiModelProperty({ description: 'address_2', example: '' })
  address_2: string;
  @ApiModelProperty({ description: 'city', example: 'San Francisco' })
  city: string;
  @ApiModelProperty({ description: 'state', example: 'CA' })
  state: string;
  @ApiModelProperty({ description: 'postcode', example: '94103' })
  postcode: string;
  @ApiModelProperty({ description: 'country', example: 'US' })
  country: string;


}

export class Billing {
  @ApiModelProperty({ description: 'first_name', example: 'John' })
  first_name: string;
  @ApiModelProperty({ description: 'last_name', example: 'Doe' })
  last_name: string;
  @ApiModelProperty({ description: 'address_1', example: '969 Market' })
  address_1: string
  @ApiModelProperty({ description: 'address_2', example: '' })
  address_2: string;
  @ApiModelProperty({ description: 'city', example: 'San Francisco' })
  city: string;
  @ApiModelProperty({ description: 'state', example: 'CA' })
  state: string;
  @ApiModelProperty({ description: 'postcode', example: '94103' })
  postcode: string;
  @ApiModelProperty({ description: 'country', example: 'US' })
  country: string;
  @ApiModelProperty({ description: 'email', example: 'john.doe@example.com' })
  email: string;
  @ApiModelProperty({ description: 'phone', example: '(555) 555-5555' })
  phone: string;

}

export class PostMeta {

  @ApiModelProperty({ description: '_stripe_customer_id', example: 'cus_484hfj3m4fm3' })
  _stripe_customer_id: string;

  @ApiModelProperty({ description: '_stripe_card_id', example: 'card_5n4fndsn0' })
  _stripe_card_id: string;
}

export class PaymentDetails {
  @ApiModelProperty({ description: 'post_meta' })
  post_meta: PostMeta;
}

export class CreateSubscriptionDto {
  @ApiModelProperty({ description: 'customer_id', example: 1 })
  customer_id: number;// 1,
  @ApiModelProperty({ description: 'status', example: 'active' })
  status: string;// 'active',
  @ApiModelProperty({ description: 'billing_period', example: 'month' })
  billing_period: string;// 'month',
  @ApiModelProperty({ description: 'billing_interval', example: 1 })
  billing_interval: number;// 1,
  @ApiModelProperty({ description: 'start_date', example: '2016-04-04 10:45:00' })
  start_date: string;// '2016-04-04 10:45:00',
  @ApiModelProperty({ description: 'next_payment_date', example: '2017-01-01 10:45:00' })
  next_payment_date: string;// '2017-01-01 10:45:00',
  @ApiModelProperty({ description: 'payment_method', example: 'stripe' })
  payment_method: string;// 'stripe',
  @ApiModelProperty({ description: 'payment_details' })
  payment_details: PaymentDetails;
  @ApiModelProperty({ description: 'billing' })
  billing: Billing;
  @ApiModelProperty({ description: 'shipping' })
  shipping: Shipping;
  @ApiModelProperty({ description: 'line_items', type: [LineItems] })
  line_items: [LineItems];
  @ApiModelProperty({ description: 'shipping_lines', type: [ShippingLines] })
  shipping_lines: [ShippingLines];

}

