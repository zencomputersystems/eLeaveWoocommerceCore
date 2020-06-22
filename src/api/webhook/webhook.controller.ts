import { Controller, Post, Body, Res, Get, Param, Patch, Delete } from "@nestjs/common";
import { ApiUseTags, ApiOperation, ApiImplicitParam } from "@nestjs/swagger";
import { runServiceQuery } from "../../common/function/basic-function";
import { DeleteDto } from "../../common/dto/delete.dto";

@ApiUseTags('Webhook')
@Controller('webhook')
export class WebhookController {
  @Post()
  @ApiOperation({ title: 'Create a webhook' })
  createTaxRate(@Body() data: any, @Res() res) {
    const data1 = {
      name: "Order updated",
      topic: "order.updated",
      delivery_url: "http://requestb.in/1g0sxmo1"
    };

    let method = 'post';
    let endpoint = 'webhooks';
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);
  }

  @Get(':id')
  @ApiOperation({ title: 'Retrieve a webhook' })
  @ApiImplicitParam({ name: 'id', description: 'webhook id', required: true })
  getOneTaxRate(@Param('id') id, @Res() res) {

    let method = 'get';
    let endpoint = 'webhooks/' + id;
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get()
  @ApiOperation({ title: 'List all webhooks' })
  getAllTaxRate(@Res() res) {

    let method = 'get';
    let endpoint = 'webhooks';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Patch(':id')
  @ApiOperation({ title: 'Update a webhook' })
  @ApiImplicitParam({ name: 'id', description: 'webhook id', required: true })
  updateTaxRate(@Body() data: any, @Param('id') id, @Res() res) {
    const data1 = {
      status: "paused"
    }

    let method = 'patch';
    let endpoint = 'webhooks/' + id;
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);
  }

  @Delete(':id')
  @ApiOperation({ title: 'Delete a webhook' })
  @ApiImplicitParam({ name: 'id', description: 'webhook id', required: true })
  deleteTaxRate(@Body() data: DeleteDto, @Param('id') id, @Res() res) {
    const data1 = {
      force: true
    }
    let method = 'delete';
    let endpoint = 'webhooks/' + id;
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Post('batch')
  @ApiOperation({ title: 'Batch update webhooks' })
  batchUpdateTaxRate(@Body() data, @Res() res) {
    const data1 = {
      create: [
        {
          name: "Round toe",
          topic: "coupon.created",
          delivery_url: "http://requestb.in/1g0sxmo1"
        },
        {
          name: "Customer deleted",
          topic: "customer.deleted",
          delivery_url: "http://requestb.in/1g0sxmo1"
        }
      ],
      delete: [
        143
      ]
    };

    let method = 'post';
    let endpoint = 'webhooks/batch';
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }
}