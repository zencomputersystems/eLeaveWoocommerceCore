import { ApiProperty } from "@nestjs/swagger";

export class DeleteOrderDto {
  @ApiProperty({ description: 'force delete', example: false })
  force: boolean;
}