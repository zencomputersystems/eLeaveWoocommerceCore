import { Controller, Get, Param, Res, Patch, Body } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { runServiceQuery } from "../../common/function/basic-function";

@ApiTags('System status tool')
@Controller('system-status-tool')
export class SystemStatusToolController {
  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a tool from system status' })
  @ApiParam({ name: 'id', description: 'Product id', required: true, example: 'clear_transients' })
  getOneShippingZone(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'system_status/tools/' + params.id;
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get()
  @ApiOperation({ summary: 'List all tools from system status' })
  getAllShippingZones(@Res() res) {

    let method = 'get';
    let endpoint = 'system_status/tools';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Patch(':id')
  @ApiOperation({ summary: 'Run a tool from system status' })
  @ApiParam({ name: 'id', description: 'Zone id', required: true, example: 'clear_transients' })
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