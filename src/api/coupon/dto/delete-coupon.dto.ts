import { ApiModelProperty } from "@nestjs/swagger";

export class DeleteCouponDto {
  @ApiModelProperty({ description: 'force delete', example: false })
  force: boolean;
}