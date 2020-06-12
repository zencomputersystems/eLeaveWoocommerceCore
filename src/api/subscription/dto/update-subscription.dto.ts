import { ApiProperty } from "@nestjs/swagger";

export class LineItemDto {
  @ApiProperty({ description: 'Product id', example: '267' })
  product_id: number;
  @ApiProperty({ description: 'Quantity', example: '100' })
  quantity: number;
}

export class UpdateSubscriptionDto {
  @ApiProperty({ description: 'Status', example: 'active' })
  status: string;
  @ApiProperty({ description: 'Line item', type: [LineItemDto] })
  line_items: LineItemDto[]
}