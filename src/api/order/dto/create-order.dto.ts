import { ApiModelProperty } from "@nestjs/swagger"

export class ShippingOrderInfoDto {
  @ApiModelProperty({ description: 'First name.', example: 'John' })
  first_name: string;

  @ApiModelProperty({ description: 'Last name', example: 'Doe' })
  last_name: string;

  @ApiModelProperty({ description: 'Company name', example: '' })
  company: string;

  @ApiModelProperty({ description: 'Address line 1', example: '969 Market' })
  address_1: string;

  @ApiModelProperty({ description: 'Address line 2', example: '' })
  address_2: string;

  @ApiModelProperty({ description: 'City name', example: 'San Francisco' })
  city: string;

  @ApiModelProperty({ description: 'ISO code or name of the state, province or district.', example: 'CA' })
  state: string;

  @ApiModelProperty({ description: 'Postal code', example: '94103' })
  postcode: string;

  @ApiModelProperty({ description: 'ISO code of the country', example: 'US' })
  country: string;

}

export class BillingOrderInfoDto extends ShippingOrderInfoDto {
  @ApiModelProperty({ description: 'Email address', example: 'john.doe@example.com' })
  email: string;

  @ApiModelProperty({ description: 'Phone number', example: '(555) 555-5555' })
  phone: string;
}

export class CreateOrderDto {
  @ApiModelProperty({ description: 'The email address for the Order', example: 'john.doe@example.com' })
  email: string;

  @ApiModelProperty({ description: 'Order first name', example: 'John' })
  first_name: string;

  @ApiModelProperty({ description: 'Order last name', example: 'Doe' })
  last_name: string;

  @ApiModelProperty({ description: 'Order login name', example: 'john.doe' })
  username: string;

  @ApiModelProperty({ description: 'List of billing address data', type: BillingOrderInfoDto })
  billing: BillingOrderInfoDto;

  @ApiModelProperty({ description: 'List of shipping address data', type: ShippingOrderInfoDto })
  shipping: ShippingOrderInfoDto;
}