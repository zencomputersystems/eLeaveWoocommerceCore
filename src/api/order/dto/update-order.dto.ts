import { ApiProperty } from "@nestjs/swagger";

export class UpdateOrderData {
  @ApiProperty({ description: 'First name', example: 'James' })
  first_name: string;
}
export class UpdateOrderDto {
  @ApiProperty({ description: 'First name', example: 'James' })
  first_name: string;

  @ApiProperty({ description: 'Billing info', type: UpdateOrderData })
  billing: UpdateOrderData;

  @ApiProperty({ description: 'Shipping info', type: UpdateOrderData })
  shipping: UpdateOrderData;
}