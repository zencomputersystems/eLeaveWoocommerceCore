import { Controller, Get, Param, Res } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { runServiceQuery } from "../../common/function/basic-function";

@ApiTags('Shipping method')
@Controller('shipping-method')
export class ShippingMethodController {
  @Get(':id')
  @ApiOperation({ summary: 'List all shipping zones' })
  @ApiParam({ name: 'id', description: 'Id', required: true, example: 'flat-rate' })
  getOneShippingMethod(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'shipping_methods/' + params.id;
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get()
  @ApiOperation({ summary: 'List all shipping zones' })
  getAllShippingMethod(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'shipping_methods';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

}