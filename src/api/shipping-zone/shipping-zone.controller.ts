import { Controller, Post, Param, Body, Res, Get, Patch, Delete } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { runServiceQuery } from "../../common/function/basic-function";
import { DeleteDto } from "../../common/dto/delete.dto";

@ApiTags('Shipping zone')
@Controller('shipping-zone')
export class ShippingZoneController {
  @Post()
  @ApiOperation({ summary: 'Create a shipping zone' })
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
  @ApiOperation({ summary: 'Retrieve a shipping zone' })
  @ApiParam({ name: 'id', description: 'Product id', required: true })
  getOneShippingZone(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'shipping/zones/' + params.id;
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get()
  @ApiOperation({ summary: 'List all shipping zones' })
  getAllShippingZones(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'shipping/zones';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a product variations' })
  @ApiParam({ name: 'id', description: 'Zone id', required: true })
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
  @ApiOperation({ summary: 'Delete a product-variations' })
  @ApiParam({ name: 'id', description: 'product-variations id', required: true })
  deleteShippingZones(@Body() data: DeleteDto, @Param() params, @Res() res) {

    let method = 'delete';
    let endpoint = 'shipping/zones/' + params.id;
    let dataQuery = data;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }
}