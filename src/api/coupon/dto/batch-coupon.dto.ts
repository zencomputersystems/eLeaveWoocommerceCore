import { CreateCouponDto } from "./create-coupon.dto";
import { ApiProperty } from "@nestjs/swagger";

export class BatchCreateCouponDto extends CreateCouponDto { }
export class BatchUpdateCouponDto {
  @ApiProperty({ description: 'Coupon id', example: 82 })
  id: number;
  @ApiProperty({ description: 'Minimum amount', example: '90' })
  minimum_amount: string;
}

export class BatchCouponDto {
  @ApiProperty({ description: 'Create data', type: [BatchCreateCouponDto] })
  create: BatchCreateCouponDto[];

  @ApiProperty({ description: 'Update data', type: [BatchUpdateCouponDto] })
  update: BatchUpdateCouponDto[];

  @ApiProperty({ description: 'Delete data', example: [82] })
  delete: number[];
}