import { Controller, Post, Body, Res, Get, Param, Patch, Delete } from "@nestjs/common";
import { ApiUseTags, ApiOperation, ApiImplicitParam } from '@nestjs/swagger';
import { runServiceQuery } from "../../common/function/basic-function";
import { DeleteDto } from "../../common/dto/delete.dto";

@ApiUseTags('Shipping zone method')
@Controller('shipping-zone-method')
export class ShippingZoneMethodController {
  @Post(':id')
  @ApiOperation({ title: 'Create a shipping zone' })
  @ApiImplicitParam({ name: 'id', description: 'Product id', required: true })
  createShippingZoneMethod(@Param() params, @Body() data: any, @Res() res) {
    const data1 = {
      method_id: "flat_rate"
    };

    let method = 'post';
    let endpoint = 'shipping/zones/' + params.id + '/methods';
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get(':zone_id/:id')
  @ApiOperation({ title: 'Retrieve a shipping zone' })
  @ApiImplicitParam({ name: 'zone_id', description: 'Zone id', required: true })
  @ApiImplicitParam({ name: 'id', description: 'Id', required: true })
  getOneShippingZoneMethod(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'shipping/zones/' + params.zone_id + '/methods/' + params.id;
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get(':id')
  @ApiOperation({ title: 'List all shipping zones' })
  @ApiImplicitParam({ name: 'id', description: 'Id', required: true })
  getAllShippingZonesMethod(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'shipping/zones/' + params.id + '/methods';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Patch(':zone_id/:id')
  @ApiOperation({ title: 'Update a product variations' })
  @ApiImplicitParam({ name: 'id', description: 'Id', required: true })
  @ApiImplicitParam({ name: 'zone_id', description: 'Zone id', required: true })
  updateShippingZonesMethod(@Body() data: any, @Param() params, @Res() res) {
    const data1 = {
      settings: {
        cost: "20.00"
      }
    };

    let method = 'patch';
    let endpoint = 'shipping/zones/' + params.zone_id + '/methods/' + params.id;
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Delete(':zone_id/:id')
  @ApiOperation({ title: 'Delete a product-variations' })
  @ApiImplicitParam({ name: 'id', description: 'Id', required: true })
  @ApiImplicitParam({ name: 'zone_id', description: 'Zone id', required: true })
  deleteShippingZonesMethod(@Body() data: DeleteDto, @Param() params, @Res() res) {

    let method = 'delete';
    let endpoint = 'shipping/zones/' + params.zone_id + '/methods/' + params.id;;
    let dataQuery = data;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }
}