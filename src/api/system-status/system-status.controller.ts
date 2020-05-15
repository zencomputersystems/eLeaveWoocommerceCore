import { Controller, Get, Res } from "@nestjs/common";
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { runServiceQuery } from "../../common/function/basic-function";

@ApiTags('System status')
@Controller('system-status')
export class SystemStatusController {
  @Get()
  @ApiOperation({ summary: 'List all system status items' })
  getAllShippingMethod(@Res() res) {

    let method = 'get';
    let endpoint = 'system_status';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }
}