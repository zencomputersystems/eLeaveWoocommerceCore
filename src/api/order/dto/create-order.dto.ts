import { ApiProperty } from "@nestjs/swagger"

export class ShippingOrderInfoDto {
  @ApiProperty({ description: 'First name.', example: 'John' })
  first_name: string;

  @ApiProperty({ description: 'Last name', example: 'Doe' })
  last_name: string;

  @ApiProperty({ description: 'Company name', example: '' })
  company: string;

  @ApiProperty({ description: 'Address line 1', example: '969 Market' })
  address_1: string;

  @ApiProperty({ description: 'Address line 2', example: '' })
  address_2: string;

  @ApiProperty({ description: 'City name', example: 'San Francisco' })
  city: string;

  @ApiProperty({ description: 'ISO code or name of the state, province or district.', example: 'CA' })
  state: string;

  @ApiProperty({ description: 'Postal code', example: '94103' })
  postcode: string;

  @ApiProperty({ description: 'ISO code of the country', example: 'US' })
  country: string;

}

export class BillingOrderInfoDto extends ShippingOrderInfoDto {
  @ApiProperty({ description: 'Email address', example: 'john.doe@example.com' })
  email: string;

  @ApiProperty({ description: 'Phone number', example: '(555) 555-5555' })
  phone: string;
}

export class CreateOrderDto {
  @ApiProperty({ description: 'The email address for the Order', example: 'john.doe@example.com' })
  email: string;

  @ApiProperty({ description: 'Order first name', example: 'John' })
  first_name: string;

  @ApiProperty({ description: 'Order last name', example: 'Doe' })
  last_name: string;

  @ApiProperty({ description: 'Order login name', example: 'john.doe' })
  username: string;

  @ApiProperty({ description: 'List of billing address data', type: BillingOrderInfoDto })
  billing: BillingOrderInfoDto;

  @ApiProperty({ description: 'List of shipping address data', type: ShippingOrderInfoDto })
  shipping: ShippingOrderInfoDto;
}