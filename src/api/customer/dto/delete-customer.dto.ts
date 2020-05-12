import { ApiProperty } from "@nestjs/swagger";

export class DeleteCustomerDto {
  @ApiProperty({ description: 'force delete', example: false })
  force: boolean;
}