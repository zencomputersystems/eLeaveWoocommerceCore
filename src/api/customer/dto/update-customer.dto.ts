import { ApiModelProperty } from "@nestjs/swagger";

export class UpdateCustomerData {
  @ApiModelProperty({ description: 'First name', example: 'James' })
  first_name: string;
}
export class UpdateCustomerDto {
  @ApiModelProperty({ description: 'First name', example: 'James' })
  first_name: string;

  @ApiModelProperty({ description: 'Billing info', type: UpdateCustomerData })
  billing: UpdateCustomerData;

  @ApiModelProperty({ description: 'Shipping info', type: UpdateCustomerData })
  shipping: UpdateCustomerData;
}