import { Controller, Post, Body, Res, Get, Param, Patch, Delete } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiParam } from "@nestjs/swagger";
import { runServiceQuery } from "../../common/function/basic-function";
import { DeleteOrderDto } from "../order/dto/delete-order.dto";

@ApiTags('Product variations')
@Controller('product-variations')
export class ProductVariationController {
  @Post(':id')
  @ApiOperation({ summary: 'Create a product variation' })
  @ApiParam({ name: 'id', description: 'Product id', required: true })
  createProductVariations(@Param('id') id, @Body() data: any, @Res() res) {
    const data1 = {
      regular_price: "9.00",
      image: {
        id: 423
      },
      attributes: [
        {
          id: 9,
          option: "Black"
        }
      ]
    };

    let method = 'post';
    let endpoint = 'products/' + id + '/variations';
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get(':id/:variation_id')
  @ApiOperation({ summary: 'Retrieve a product variations' })
  @ApiParam({ name: 'id', description: 'Product id', required: true })
  @ApiParam({ name: 'variation_id', description: 'Variations id', required: true })
  getOneProductVariations(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'products/' + params.id + '/variations/' + params.variation_id;
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get(':id')
  @ApiOperation({ summary: 'List all product variationss' })
  @ApiParam({ name: 'id', description: 'Product id', required: true })
  getAllProductVariations(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'products/' + params.id + '/variations';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Patch(':id/:variation_id')
  @ApiOperation({ summary: 'Update a product variations' })
  @ApiParam({ name: 'id', description: 'Product id', required: true })
  @ApiParam({ name: 'variation_id', description: 'Variations id', required: true })
  updateProductVariations(@Body() data: any, @Param() params, @Res() res) {
    const data1 = {
      regular_price: "10.00"
    };

    let method = 'patch';
    let endpoint = 'products/' + params.id + '/variations/' + params.variation_id;
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a product-variations' })
  @ApiParam({ name: 'id', description: 'product-variations id', required: true })
  @ApiParam({ name: 'variation_id', description: 'Variations id', required: true })
  deleteProductVariations(@Body() data: DeleteOrderDto, @Param() params, @Res() res) {
    const data1 = {
      force: true
    }
    let method = 'delete';
    let endpoint = 'products/' + params.id + '/variations/' + params.variation_id;
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Post('batch/:id')
  @ApiOperation({ summary: 'Batch update product variationss' })
  @ApiParam({ name: 'id', description: 'Product id', required: true })
  batchUpdateProductVariations(@Param() params, @Body() data, @Res() res) {
    const data1 = {
      create: [
        {
          regular_price: "10.00",
          attributes: [
            {
              id: 6,
              option: "Blue"
            }
          ]
        },
        {
          regular_price: "10.00",
          attributes: [
            {
              id: 6,
              option: "White"
            }
          ]
        }
      ],
      update: [
        {
          id: 733,
          regular_price: "10.00"
        }
      ],
      delete: [
        732
      ]
    };

    let method = 'post';
    let endpoint = 'products/' + params.id + '/variations/batch';
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

}