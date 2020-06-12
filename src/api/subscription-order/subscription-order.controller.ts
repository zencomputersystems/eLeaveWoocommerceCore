import { Controller, Get, Param, Res } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { runServiceQueryV1 } from "../../common/function/basic-function";

@ApiTags('Subscription order')
@Controller('subscription-order')
export class SubscriptionOrderController {
  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a subscription orders' })
  @ApiParam({ name: 'id', description: 'subscription id', required: true })
  getSubscriptionOrder(@Param('id') id, @Res() res) {

    let method = 'get';
    let endpoint = 'subscriptions/' + id + '/orders';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQueryV1([method, endpoint, dataQuery, paramQuery, res]);

  }

}