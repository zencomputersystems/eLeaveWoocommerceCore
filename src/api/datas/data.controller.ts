import { Controller, Get, Res, Param } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { runServiceQuery } from "../../common/function/basic-function";

@ApiTags('Data')
@Controller('data')
export class DataController {
  @Get()
  @ApiOperation({ summary: 'List all data' })
  getAllData(@Res() res) {

    let method = 'get';
    let endpoint = 'data';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get('continent')
  @ApiOperation({ summary: 'List all continents' })
  getAllContinent(@Res() res) {

    let method = 'get';
    let endpoint = 'data/continents';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get('continent/:id')
  @ApiOperation({ summary: 'Retrieve continent data' })
  @ApiParam({ name: 'id', description: 'Location', required: true, example: 'eu' })
  getOneContinent(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'data/continents/' + params.id;
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get('country')
  @ApiOperation({ summary: 'List all country' })
  getAllCountry(@Res() res) {

    let method = 'get';
    let endpoint = 'data/countries';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get('country/:id')
  @ApiOperation({ summary: 'Retrieve country data' })
  @ApiParam({ name: 'id', description: 'Location', required: true, example: 'br' })
  getOneCountry(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'data/countries/' + params.id;
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get('currency')
  @ApiOperation({ summary: 'List all currency' })
  getAllCurrency(@Res() res) {

    let method = 'get';
    let endpoint = 'data/currencies';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get('currency/:id')
  @ApiOperation({ summary: 'Retrieve currency data' })
  @ApiParam({ name: 'id', description: 'Currency', required: true, example: 'brl' })
  getOneCurrency(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'data/currenries/' + params.id;
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get('currency/current')
  @ApiOperation({ summary: 'Retrieve current currency' })
  getCurrentCurrency(@Res() res) {

    let method = 'get';
    let endpoint = 'data/currencies/current';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

}