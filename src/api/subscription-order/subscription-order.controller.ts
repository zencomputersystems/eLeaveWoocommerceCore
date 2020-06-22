import { Controller, Get, Param, Res } from "@nestjs/common";
import { ApiUseTags, ApiOperation, ApiImplicitParam } from '@nestjs/swagger';
import { runServiceQueryV1 } from "../../common/function/basic-function";

@ApiUseTags('Subscription order')
@Controller('subscription-order')
export class SubscriptionOrderController {
  @Get(':id')
  @ApiOperation({ title: 'Retrieve a subscription orders' })
  @ApiImplicitParam({ name: 'id', description: 'subscription id', required: true })
  getSubscriptionOrder(@Param('id') id, @Res() res) {

    let method = 'get';
    let endpoint = 'subscriptions/' + id + '/orders';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQueryV1([method, endpoint, dataQuery, paramQuery, res]);

  }

}