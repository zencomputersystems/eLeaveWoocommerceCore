import { Controller, Get, Res } from "@nestjs/common";
import { ApiTags, ApiOperation } from "@nestjs/swagger";
import { runServiceQuery } from "../../common/function/basic-function";

@ApiTags('Setting')
@Controller('setting')
export class SettingController {
  @Get()
  @ApiOperation({ summary: 'List all settings groups' })
  getAllSetting(@Res() res) {

    let method = 'get';
    let endpoint = 'settings';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }
}