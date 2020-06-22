import { ApiModelProperty } from "@nestjs/swagger";

export class DeleteCustomerDto {
  @ApiModelProperty({ description: 'force delete', example: false })
  force: boolean;
}