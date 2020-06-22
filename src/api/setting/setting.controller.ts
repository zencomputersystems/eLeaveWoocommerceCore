import { Controller, Get, Res } from "@nestjs/common";
import { ApiUseTags, ApiOperation } from "@nestjs/swagger";
import { runServiceQuery } from "../../common/function/basic-function";

@ApiUseTags('Setting')
@Controller('setting')
export class SettingController {
  @Get()
  @ApiOperation({ title: 'List all settings groups' })
  getAllSetting(@Res() res) {

    let method = 'get';
    let endpoint = 'settings';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }
}