import { ApiProperty } from "@nestjs/swagger";

export class DeleteDto {
  @ApiProperty({ description: 'force delete', example: false })
  force: boolean;
}