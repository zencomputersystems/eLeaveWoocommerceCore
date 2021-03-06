import { Controller, Post, Body, Res, Get, Param, Patch, Delete } from "@nestjs/common";
import { ApiUseTags, ApiOperation, ApiImplicitParam } from "@nestjs/swagger";
import { runServiceQuery } from "../../common/function/basic-function";
import { DeleteDto } from "../../common/dto/delete.dto";

@ApiUseTags('Product review')
@Controller('product-review')
export class ProductReviewController {
  @Post()
  @ApiOperation({ title: 'Create a product review' })
  createProductShippingClasss(@Body() data: any, @Res() res) {
    const data1 = {
      product_id: 242,
      review: "Nice album!",
      reviewer: "John Doe",
      reviewer_email: "john.doe@example.com",
      rating: 5
    };

    let method = 'post';
    let endpoint = 'products/reviews';
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get(':id')
  @ApiOperation({ title: 'Retrieve a product review' })
  @ApiImplicitParam({ name: 'id', description: 'Product id', required: true })
  getOneProductShippingClasss(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'products/reviews/' + params.id;
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get()
  @ApiOperation({ title: 'List all product reviewes' })
  getAllProductShippingClasss(@Res() res) {

    let method = 'get';
    let endpoint = 'products/reviews/';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Patch(':id')
  @ApiOperation({ title: 'Update a product reviews' })
  @ApiImplicitParam({ name: 'id', description: 'Product id', required: true })
  updateProductShippingClasss(@Body() data: any, @Param() params, @Res() res) {
    const data1 = {
      rating: 5
    };

    let method = 'patch';
    let endpoint = 'products/reviews/' + params.id;
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Delete(':id')
  @ApiOperation({ title: 'Delete a product-reviews' })
  @ApiImplicitParam({ name: 'id', description: 'product-shipping_classs id', required: true })
  deleteProductShippingClasss(@Body() data: DeleteDto, @Param() params, @Res() res) {
    const data1 = {
      force: true
    }
    let method = 'delete';
    let endpoint = 'products/reviews/' + params.id;
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Post('batch')
  @ApiOperation({ title: 'Batch update product reviewss' })
  batchUpdateProductShippingClasss(@Param() params, @Body() data, @Res() res) {
    const data1 = {
      create: [
        {
          product_id: 22,
          review: "Looks fine",
          reviewer: "John Doe",
          reviewer_email: "john.doe@example.com",
          rating: 4
        },
        {
          product_id: 22,
          review: "I love this album",
          reviewer: "John Doe",
          reviewer_email: "john.doe@example.com",
          rating: 5
        }
      ],
      update: [
        {
          id: 7,
          reviewer: "John Doe",
          reviewer_email: "john.doe@example.com"
        }
      ],
      delete: [
        22
      ]
    };

    let method = 'post';
    let endpoint = 'products/reviews/batch';
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }
}