import { Controller, Post, Body, Res, Get, Delete, Param } from "@nestjs/common";
import { ApiUseTags, ApiOperation, ApiImplicitParam } from "@nestjs/swagger";
import { runServiceQuery } from "../../common/function/basic-function";
import { DeleteDto } from "../../common/dto/delete.dto";

@ApiUseTags('Tax class')
@Controller('tax-class')
export class TaxClassController {
  @Post()
  @ApiOperation({ title: 'Create a tax rate' })
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
  @ApiOperation({ title: 'List all tax class' })
  getAllTaxClass(@Res() res) {

    let method = 'get';
    let endpoint = 'taxes/classes';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Delete(':slog')
  @ApiOperation({ title: 'Delete a tax class' })
  @ApiImplicitParam({ name: 'slug', description: 'tax rate id', required: true })
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