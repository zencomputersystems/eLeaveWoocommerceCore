import { ApiProperty } from "@nestjs/swagger";

export class UpdateCustomerData {
  @ApiProperty({ description: 'First name', example: 'James' })
  first_name: string;
}
export class UpdateCustomerDto {
  @ApiProperty({ description: 'First name', example: 'James' })
  first_name: string;

  @ApiProperty({ description: 'Billing info', type: UpdateCustomerData })
  billing: UpdateCustomerData;

  @ApiProperty({ description: 'Shipping info', type: UpdateCustomerData })
  shipping: UpdateCustomerData;
}