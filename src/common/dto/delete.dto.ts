import { ApiModelProperty } from "@nestjs/swagger";

export class DeleteDto {
  @ApiModelProperty({ description: 'force delete', example: false })
  force: boolean;
}