import { Controller, Get, Param, Res, Patch, Body } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { runServiceQuery } from "../../common/function/basic-function";

@ApiTags('Shipping zone location')
@Controller('shipping-zone-location')
export class ShippingZoneLocationController {
  @Get(':id')
  @ApiOperation({ summary: 'List all locations of a shipping zone' })
  @ApiParam({ name: 'id', description: 'Product id', required: true })
  getOneShippingZoneLocation(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'shipping/zones/' + params.id + '/locations';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a location of a shipping zone' })
  @ApiParam({ name: 'id', description: 'Zone id', required: true })
  updateShippingZoneLocation(@Body() data: any, @Param() params, @Res() res) {
    const data1 = {
      order: 1
    };

    let method = 'patch';
    let endpoint = 'shipping/zones/' + params.id;
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

}