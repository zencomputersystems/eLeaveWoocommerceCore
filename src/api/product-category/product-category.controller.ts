import { Controller, Post, Param, Body, Res, Get, Patch, Delete } from "@nestjs/common";
import { ApiUseTags, ApiOperation, ApiImplicitParam } from "@nestjs/swagger";
import { runServiceQuery } from "../../common/function/basic-function";
import { DeleteDto } from "../../common/dto/delete.dto";

@ApiUseTags('Product category')
@Controller('product-category')
export class ProductCategoryController {
  @Post()
  @ApiOperation({ title: 'Create a product category' })
  createProductcategorys(@Body() data: any, @Res() res) {
    const data1 = {
      name: "Clothing",
      image: {
        src: "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_front.jpg"
      }
    };

    let method = 'post';
    let endpoint = 'products/categories';
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get(':id')
  @ApiOperation({ title: 'Retrieve a product category' })
  @ApiImplicitParam({ name: 'id', description: 'Product id', required: true })
  getOneProductcategorys(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'products/categories/' + params.id;
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get()
  @ApiOperation({ title: 'List all product categories' })
  getAllProductcategorys(@Res() res) {

    let method = 'get';
    let endpoint = 'products/categories/';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Patch(':id')
  @ApiOperation({ title: 'Update a product categorys' })
  @ApiImplicitParam({ name: 'id', description: 'Product id', required: true })
  updateProductcategorys(@Body() data: any, @Param() params, @Res() res) {
    const data1 = {
      description: "All kinds of clothes."
    };

    let method = 'patch';
    let endpoint = 'products/categories/' + params.id;
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Delete(':id')
  @ApiOperation({ title: 'Delete a product-categorys' })
  @ApiImplicitParam({ name: 'id', description: 'product-categorys id', required: true })
  deleteProductcategorys(@Body() data: DeleteDto, @Param() params, @Res() res) {
    const data1 = {
      force: true
    }
    let method = 'delete';
    let endpoint = 'products/categories/' + params.id;
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Post('batch')
  @ApiOperation({ title: 'Batch update product categoryss' })
  batchUpdateProductcategorys(@Param() params, @Body() data, @Res() res) {
    const data1 = {
      create: [
        {
          name: "Albums"
        },
        {
          name: "Clothing"
        }
      ],
      update: [
        {
          id: 10,
          description: "Nice hoodies"
        }
      ],
      delete: [
        11,
        12
      ]
    };

    let method = 'post';
    let endpoint = 'products/categories/batch';
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }
}