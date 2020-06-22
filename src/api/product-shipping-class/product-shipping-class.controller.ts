import { Controller, Post, Body, Res, Get, Param, Patch, Delete } from "@nestjs/common";
import { ApiUseTags, ApiOperation, ApiImplicitParam } from "@nestjs/swagger";
import { runServiceQuery } from "../../common/function/basic-function";
import { DeleteDto } from "../../common/dto/delete.dto";

@ApiUseTags('Product shipping class')
@Controller('product-shipping-class')
export class ProductShippingClassController {
  @Post()
  @ApiOperation({ title: 'Create a product shipping class' })
  createProductShippingClasss(@Body() data: any, @Res() res) {
    const data1 = {
      name: "Priority"
    };

    let method = 'post';
    let endpoint = 'products/shipping_classes';
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get(':id')
  @ApiOperation({ title: 'Retrieve a product shipping class' })
  @ApiImplicitParam({ name: 'id', description: 'Product id', required: true })
  getOneProductShippingClasss(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'products/shipping_classes/' + params.id;
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get()
  @ApiOperation({ title: 'List all product shipping classes' })
  getAllProductShippingClasss(@Res() res) {

    let method = 'get';
    let endpoint = 'products/shipping_classes/';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Patch(':id')
  @ApiOperation({ title: 'Update a product shipping classs' })
  @ApiImplicitParam({ name: 'id', description: 'Product id', required: true })
  updateProductShippingClasss(@Body() data: any, @Param() params, @Res() res) {
    const data1 = {
      description: "Priority mail."
    };

    let method = 'patch';
    let endpoint = 'products/shipping_classes/' + params.id;
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Delete(':id')
  @ApiOperation({ title: 'Delete a product-shipping classs' })
  @ApiImplicitParam({ name: 'id', description: 'product-shipping_classs id', required: true })
  deleteProductShippingClasss(@Body() data: DeleteDto, @Param() params, @Res() res) {
    const data1 = {
      force: true
    }
    let method = 'delete';
    let endpoint = 'products/shipping_classes/' + params.id;
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Post('batch')
  @ApiOperation({ title: 'Batch update product shipping classss' })
  batchUpdateProductShippingClasss(@Param() params, @Body() data, @Res() res) {
    const data1 = {
      create: [
        {
          name: "Small items"
        },
        {
          name: "Large items"
        }
      ],
      update: [
        {
          id: 33,
          description: "Express shipping"
        }
      ],
      delete: [
        32
      ]
    };

    let method = 'post';
    let endpoint = 'products/shipping_classes/batch';
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

}