import { ApiModelProperty } from "@nestjs/swagger";

export class UpdateCouponDto {
  @ApiModelProperty({ description: 'acmount', example: "5" })
  amount: string
}