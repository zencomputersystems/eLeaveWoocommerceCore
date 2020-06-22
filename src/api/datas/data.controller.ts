import { Controller, Get, Res, Param } from "@nestjs/common";
import { ApiUseTags, ApiOperation, ApiImplicitParam } from '@nestjs/swagger';
import { runServiceQuery } from "../../common/function/basic-function";

@ApiUseTags('Data')
@Controller('data')
export class DataController {
  @Get()
  @ApiOperation({ title: 'List all data' })
  getAllData(@Res() res) {

    let method = 'get';
    let endpoint = 'data';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get('continent')
  @ApiOperation({ title: 'List all continents' })
  getAllContinent(@Res() res) {

    let method = 'get';
    let endpoint = 'data/continents';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get('continent/:id')
  @ApiOperation({ title: 'Retrieve continent data' })
  @ApiImplicitParam({ name: 'id', description: 'Location', required: true, enum: 'eu' })
  getOneContinent(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'data/continents/' + params.id;
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get('country')
  @ApiOperation({ title: 'List all country' })
  getAllCountry(@Res() res) {

    let method = 'get';
    let endpoint = 'data/countries';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get('country/:id')
  @ApiOperation({ title: 'Retrieve country data' })
  @ApiImplicitParam({ name: 'id', description: 'Location', required: true, enum: 'br' })
  getOneCountry(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'data/countries/' + params.id;
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get('currency')
  @ApiOperation({ title: 'List all currency' })
  getAllCurrency(@Res() res) {

    let method = 'get';
    let endpoint = 'data/currencies';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get('currency/:id')
  @ApiOperation({ title: 'Retrieve currency data' })
  @ApiImplicitParam({ name: 'id', description: 'Currency', required: true, enum: 'brl' })
  getOneCurrency(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'data/currenries/' + params.id;
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get('currency/current')
  @ApiOperation({ title: 'Retrieve current currency' })
  getCurrentCurrency(@Res() res) {

    let method = 'get';
    let endpoint = 'data/currencies/current';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

}