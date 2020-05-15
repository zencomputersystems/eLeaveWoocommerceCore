import { Controller, Post, Body, Res, Get, Delete, Param } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiParam } from "@nestjs/swagger";
import { runServiceQuery } from "../../common/function/basic-function";
import { DeleteDto } from "../../common/dto/delete.dto";

@ApiTags('Tax class')
@Controller('tax-class')
export class TaxClassController {
  @Post()
  @ApiOperation({ summary: 'Create a tax rate' })
  createTaxClass(@Body() data: any, @Res() res) {
    const data1 = {
      name: "Zero Rate"
    };

    let method = 'post';
    let endpoint = 'taxes/classes';
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);
  }

  @Get()
  @ApiOperation({ summary: 'List all tax class' })
  getAllTaxClass(@Res() res) {

    let method = 'get';
    let endpoint = 'taxes/classes';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Delete(':slog')
  @ApiOperation({ summary: 'Delete a tax class' })
  @ApiParam({ name: 'slug', description: 'tax rate id', required: true })
  deleteTaxClass(@Body() data: DeleteDto, @Param('slug') slug, @Res() res) {
    const data1 = {
      force: true
    }
    let method = 'delete';
    let endpoint = 'taxes/classes/' + slug;
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

}