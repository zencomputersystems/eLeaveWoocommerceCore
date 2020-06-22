import { Controller, Get, Param, Res } from "@nestjs/common";
import { ApiUseTags, ApiOperation, ApiImplicitParam } from '@nestjs/swagger';
import { runServiceQuery } from "../../common/function/basic-function";

@ApiUseTags('Shipping method')
@Controller('shipping-method')
export class ShippingMethodController {
  @Get(':id')
  @ApiOperation({ title: 'List all shipping zones' })
  @ApiImplicitParam({ name: 'id', description: 'Id', required: true, enum: 'flat-rate' })
  getOneShippingMethod(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'shipping_methods/' + params.id;
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get()
  @ApiOperation({ title: 'List all shipping zones' })
  getAllShippingMethod(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'shipping_methods';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

}