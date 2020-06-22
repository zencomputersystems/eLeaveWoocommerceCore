import { Controller, Get, Param, Res, Patch, Body } from "@nestjs/common";
import { ApiUseTags, ApiOperation, ApiImplicitParam } from '@nestjs/swagger';
import { runServiceQuery } from "../../common/function/basic-function";

@ApiUseTags('System status tool')
@Controller('system-status-tool')
export class SystemStatusToolController {
  @Get(':id')
  @ApiOperation({ title: 'Retrieve a tool from system status' })
  @ApiImplicitParam({ name: 'id', description: 'Product id', required: true, enum: 'clear_transients' })
  getOneShippingZone(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'system_status/tools/' + params.id;
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get()
  @ApiOperation({ title: 'List all tools from system status' })
  getAllShippingZones(@Res() res) {

    let method = 'get';
    let endpoint = 'system_status/tools';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Patch(':id')
  @ApiOperation({ title: 'Run a tool from system status' })
  @ApiImplicitParam({ name: 'id', description: 'Zone id', required: true, enum: 'clear_transients' })
  updateSystemStatus(@Body() data: any, @Param() params, @Res() res) {
    const data1 = {
      confirm: true
    };

    let method = 'patch';
    let endpoint = 'system_status/tools/' + params.id;
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }
}