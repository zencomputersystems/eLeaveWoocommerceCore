import { Controller, Get, Param, Res, Patch, Body } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { runServiceQuery } from "../../common/function/basic-function";

@ApiTags('Payment gateway')
@Controller('payment-gateway')
export class PaymentGatewayController {
  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a payment gateway' })
  @ApiParam({ name: 'id', description: 'id', required: true })
  getOnePaymentGateway(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'payment_gateways/' + params.id;
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get()
  @ApiOperation({ summary: 'List all payment gateway' })
  getAllPaymentGateway(@Res() res) {

    let method = 'get';
    let endpoint = 'payment_gateways';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a payment gateway' })
  @ApiParam({ name: 'id', description: 'Id', required: true })
  updatePaymentGateway(@Body() data: any, @Param() params, @Res() res) {
    const data1 = {
      enabled: true
    };

    let method = 'patch';
    let endpoint = 'payment_gateways/' + params.id;
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

}