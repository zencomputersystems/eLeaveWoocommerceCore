import { ApiModelProperty } from "@nestjs/swagger"

export class CreateCouponDto {
  @ApiModelProperty({ description: 'code', example: "10off" })
  code: string;
  @ApiModelProperty({ description: 'discount_type', example: "percent" })
  discount_type: string;
  @ApiModelProperty({ description: 'amount', example: "10" })
  amount: string;
  @ApiModelProperty({ description: 'individual_use', example: true })
  individual_use: boolean;
  @ApiModelProperty({ description: 'exclude_sale_items', example: true })
  exclude_sale_items: boolean;
  @ApiModelProperty({ description: 'minimum_amount', example: "100.00" })
  minimum_amount: string;
}