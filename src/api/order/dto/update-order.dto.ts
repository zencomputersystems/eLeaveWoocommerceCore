import { ApiModelProperty } from "@nestjs/swagger";

export class UpdateOrderData {
  @ApiModelProperty({ description: 'First name', example: 'James' })
  first_name: string;
}
export class UpdateOrderDto {
  @ApiModelProperty({ description: 'First name', example: 'James' })
  first_name: string;

  @ApiModelProperty({ description: 'Billing info', type: UpdateOrderData })
  billing: UpdateOrderData;

  @ApiModelProperty({ description: 'Shipping info', type: UpdateOrderData })
  shipping: UpdateOrderData;
}