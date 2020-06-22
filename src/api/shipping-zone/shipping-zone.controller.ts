import { Controller, Post, Param, Body, Res, Get, Patch, Delete } from "@nestjs/common";
import { ApiUseTags, ApiOperation, ApiImplicitParam } from '@nestjs/swagger';
import { runServiceQuery } from "../../common/function/basic-function";
import { DeleteDto } from "../../common/dto/delete.dto";

@ApiUseTags('Shipping zone')
@Controller('shipping-zone')
export class ShippingZoneController {
  @Post()
  @ApiOperation({ title: 'Create a shipping zone' })
  createShippingZone(@Body() data: any, @Res() res) {
    const data1 = {
      name: "Brazil"
    };

    let method = 'post';
    let endpoint = 'shipping/zones';
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get(':id')
  @ApiOperation({ title: 'Retrieve a shipping zone' })
  @ApiImplicitParam({ name: 'id', description: 'Product id', required: true })
  getOneShippingZone(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'shipping/zones/' + params.id;
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get()
  @ApiOperation({ title: 'List all shipping zones' })
  getAllShippingZones(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'shipping/zones';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Patch(':id')
  @ApiOperation({ title: 'Update a product variations' })
  @ApiImplicitParam({ name: 'id', description: 'Zone id', required: true })
  updateShippingZones(@Body() data: any, @Param() params, @Res() res) {
    const data1 = {
      order: 1
    };

    let method = 'patch';
    let endpoint = 'shipping/zones/' + params.id;
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Delete(':id')
  @ApiOperation({ title: 'Delete a product-variations' })
  @ApiImplicitParam({ name: 'id', description: 'product-variations id', required: true })
  deleteShippingZones(@Body() data: DeleteDto, @Param() params, @Res() res) {

    let method = 'delete';
    let endpoint = 'shipping/zones/' + params.id;
    let dataQuery = data;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }
}