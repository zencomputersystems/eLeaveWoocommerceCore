import { ApiUseTags, ApiOperation, ApiImplicitParam } from '@nestjs/swagger';
import { Controller, Get, Res, Param, Patch, Body, Post } from "@nestjs/common";
import { runServiceQuery } from "../../common/function/basic-function";

@ApiUseTags('Setting option')
@Controller('setting-option')
export class SettingOptionController {
  @Get(':group_id/:id')
  @ApiOperation({ title: 'Retrieve a setting option' })
  @ApiImplicitParam({ name: 'group_id', description: 'group id', required: true, enum: 'general' })
  @ApiImplicitParam({ name: 'id', description: 'id', required: true, enum: 'woocommerce_allowed_countries' })
  getOneSettingOption(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'settings/' + params.group_id + '/' + params.id;
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get(':id')
  @ApiOperation({ title: 'List all settings groups' })
  @ApiImplicitParam({ name: 'id', description: 'id', required: true, enum: 'general' })
  getAllSettingOption(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'settings/' + params.id;
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Patch(':group_id/:id')
  @ApiOperation({ title: 'Update a setting option' })
  @ApiImplicitParam({ name: 'group_id', description: 'Group id', required: true })
  @ApiImplicitParam({ name: 'id', description: 'Id', required: true })
  updateSettingOption(@Body() data: any, @Param() params, @Res() res) {
    const data1 = {
      value: "all_except"
    };

    let method = 'patch';
    let endpoint = 'settings/' + params.group_id + params.id;
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Post(':id')
  @ApiOperation({ title: 'Create a product variation' })
  @ApiImplicitParam({ name: 'id', description: 'Product id', required: true })
  batchUpdateSettingOption(@Param('id') id, @Body() data: any, @Res() res) {
    const data1 = {
      create: [
        {
          regular_price: "10.00",
          attributes: [
            {
              id: 6,
              option: "Blue"
            }
          ]
        },
        {
          regular_price: "10.00",
          attributes: [
            {
              id: 6,
              option: "White"
            }
          ]
        }
      ],
      update: [
        {
          id: 733,
          regular_price: "10.00"
        }
      ],
      delete: [
        732
      ]
    };

    let method = 'post';
    let endpoint = 'products/' + id + '/settings/general/batch';
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

}