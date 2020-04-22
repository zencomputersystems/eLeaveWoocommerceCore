import { ApiProperty } from "@nestjs/swagger"

export class CreateCouponDto {
  @ApiProperty({ description: 'code', example: "10off" })
  code: string;
  @ApiProperty({ description: 'discount_type', example: "percent" })
  discount_type: string;
  @ApiProperty({ description: 'amount', example: "10" })
  amount: string;
  @ApiProperty({ description: 'individual_use', example: true })
  individual_use: boolean;
  @ApiProperty({ description: 'exclude_sale_items', example: true })
  exclude_sale_items: boolean;
  @ApiProperty({ description: 'minimum_amount', example: "100.00" })
  minimum_amount: string;
}