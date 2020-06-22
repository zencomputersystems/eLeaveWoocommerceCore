import { Controller, Post, Param, Body, Res, Get, Delete } from "@nestjs/common";
import { ApiUseTags, ApiOperation, ApiImplicitParam } from "@nestjs/swagger";
import { runServiceQuery } from "../../common/function/basic-function";
import { DeleteDto } from "../../common/dto/delete.dto";

@ApiUseTags('Refunds')
@Controller('refunds')
export class RefundController {

  @Post(':id')
  @ApiOperation({ title: 'Create a refund' })
  @ApiImplicitParam({ name: 'id', description: 'Order id', required: true })
  createRefund(@Param('id') id, @Body() data: any, @Res() res) {
    const data1 = {
      amount: "100"
    };
    let method = 'post';
    let endpoint = 'orders/' + id + '/refunds';
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get(':id/:refund_id')
  @ApiOperation({ title: 'Retrieve an order note' })
  @ApiImplicitParam({ name: 'id', description: 'Order id', required: true })
  @ApiImplicitParam({ name: 'refund_id', description: 'Refund id', required: true })
  getOneRefund(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'orders/' + params.id + '/refunds/' + params.refund_id;
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get(':id')
  @ApiOperation({ title: 'List all order notes' })
  @ApiImplicitParam({ name: 'id', description: 'Order id', required: true })
  getAllRefunds(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'orders/' + params.id + '/refunds';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Delete(':id/:refund_id')
  @ApiOperation({ title: 'Delete an order note' })
  @ApiImplicitParam({ name: 'id', description: 'Order notes id', required: true })
  @ApiImplicitParam({ name: 'refund_id', description: 'Refund id', required: true })
  deleteRefund(@Param() params, @Body() data: DeleteDto, @Res() res) {

    let method = 'delete';
    let endpoint = 'orders/' + params.id + '/refunds/' + params.note_id;
    let dataQuery = {};
    let paramQuery = data;

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

}