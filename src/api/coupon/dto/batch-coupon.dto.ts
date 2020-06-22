import { CreateCouponDto } from "./create-coupon.dto";
import { ApiModelProperty } from "@nestjs/swagger";

export class BatchCreateCouponDto extends CreateCouponDto { }
export class BatchUpdateCouponDto {
  @ApiModelProperty({ description: 'Coupon id', example: 82 })
  id: number;
  @ApiModelProperty({ description: 'Minimum amount', example: '90' })
  minimum_amount: string;
}

export class BatchCouponDto {
  @ApiModelProperty({ description: 'Create data', type: [BatchCreateCouponDto] })
  create: BatchCreateCouponDto[];

  @ApiModelProperty({ description: 'Update data', type: [BatchUpdateCouponDto] })
  update: BatchUpdateCouponDto[];

  @ApiModelProperty({ description: 'Delete data', example: [82] })
  delete: number[];
}