import { Controller, Post, Param, Body, Res, Delete, Patch, Get } from "@nestjs/common";
import { ApiUseTags, ApiOperation, ApiImplicitParam } from "@nestjs/swagger";
import { runServiceQuery } from "../../common/function/basic-function";
import { DeleteDto } from "../../common/dto/delete.dto";

@ApiUseTags('Product tag')
@Controller('product-tag')
export class ProductTagController {
  @Post()
  @ApiOperation({ title: 'Create a product tag' })
  createProductShippingClasss(@Body() data: any, @Res() res) {
    const data1 = {
      name: "Leather Shoes"
    };

    let method = 'post';
    let endpoint = 'products/tags';
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get(':id')
  @ApiOperation({ title: 'Retrieve a product tag' })
  @ApiImplicitParam({ name: 'id', description: 'Product id', required: true })
  getOneProductShippingClasss(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'products/tags/' + params.id;
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get()
  @ApiOperation({ title: 'List all product tages' })
  getAllProductShippingClasss(@Res() res) {

    let method = 'get';
    let endpoint = 'products/tags/';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Patch(':id')
  @ApiOperation({ title: 'Update a product tags' })
  @ApiImplicitParam({ name: 'id', description: 'Product id', required: true })
  updateProductShippingClasss(@Body() data: any, @Param() params, @Res() res) {
    const data1 = {
      description: "Genuine leather."
    };

    let method = 'patch';
    let endpoint = 'products/tags/' + params.id;
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Delete(':id')
  @ApiOperation({ title: 'Delete a product-tags' })
  @ApiImplicitParam({ name: 'id', description: 'product-shipping_classs id', required: true })
  deleteProductShippingClasss(@Body() data: DeleteDto, @Param() params, @Res() res) {
    const data1 = {
      force: true
    }
    let method = 'delete';
    let endpoint = 'products/tags/' + params.id;
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Post('batch')
  @ApiOperation({ title: 'Batch update product tagss' })
  batchUpdateProductShippingClasss(@Param() params, @Body() data, @Res() res) {
    const data1 = {
      create: [
        {
          name: "Round toe"
        },
        {
          name: "Flat"
        }
      ],
      update: [
        {
          id: 34,
          description: "Genuine leather."
        }
      ],
      delete: [
        35
      ]
    };

    let method = 'post';
    let endpoint = 'products/tags/batch';
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }
}