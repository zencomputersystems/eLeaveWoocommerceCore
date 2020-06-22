import { ApiModelProperty } from "@nestjs/swagger";

export class LineItemDto {
  @ApiModelProperty({ description: 'Product id', example: '267' })
  product_id: number;
  @ApiModelProperty({ description: 'Quantity', example: '100' })
  quantity: number;
}

export class UpdateSubscriptionDto {
  @ApiModelProperty({ description: 'Status', example: 'active' })
  status: string;
  @ApiModelProperty({ description: 'Line item', type: [LineItemDto] })
  line_items: LineItemDto[]
}