import { ApiProperty } from "@nestjs/swagger";

export class UpdateCouponDto {
  @ApiProperty({ description: 'acmount', example: "5" })
  amount: string
}