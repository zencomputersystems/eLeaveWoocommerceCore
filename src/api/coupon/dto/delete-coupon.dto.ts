import { ApiProperty } from "@nestjs/swagger";

export class DeleteCouponDto {
  @ApiProperty({ description: 'force delete', example: false })
  force: boolean;
}