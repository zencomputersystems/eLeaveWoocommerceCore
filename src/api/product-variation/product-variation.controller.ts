import { Controller, Post, Body, Res, Get, Param, Patch, Delete } from "@nestjs/common";
import { ApiUseTags, ApiOperation, ApiImplicitParam } from "@nestjs/swagger";
import { runServiceQuery } from "../../common/function/basic-function";
import { DeleteDto } from "../../common/dto/delete.dto";

@ApiUseTags('Product variations')
@Controller('product-variations')
export class ProductVariationController {
  @Post(':id')
  @ApiOperation({ title: 'Create a product variation' })
  @ApiImplicitParam({ name: 'id', description: 'Product id', required: true })
  createProductVariations(@Param('id') id, @Body() data: any, @Res() res) {
    const data1 = {
      regular_price: "9.00",
      image: {
        id: 240
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
  @ApiOperation({ title: 'Retrieve a product variations' })
  @ApiImplicitParam({ name: 'id', description: 'Product id', required: true })
  @ApiImplicitParam({ name: 'variation_id', description: 'Variations id', required: true })
  getOneProductVariations(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'products/' + params.id + '/variations/' + params.variation_id;
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get(':id')
  @ApiOperation({ title: 'List all product variationss' })
  @ApiImplicitParam({ name: 'id', description: 'Product id', required: true })
  getAllProductVariations(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'products/' + params.id + '/variations';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Patch(':id/:variation_id')
  @ApiOperation({ title: 'Update a product variations' })
  @ApiImplicitParam({ name: 'id', description: 'Product id', required: true })
  @ApiImplicitParam({ name: 'variation_id', description: 'Variations id', required: true })
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
  @ApiOperation({ title: 'Delete a product-variations' })
  @ApiImplicitParam({ name: 'id', description: 'product-variations id', required: true })
  @ApiImplicitParam({ name: 'variation_id', description: 'Variations id', required: true })
  deleteProductVariations(@Body() data: DeleteDto, @Param() params, @Res() res) {
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
  @ApiOperation({ title: 'Batch update product variationss' })
  @ApiImplicitParam({ name: 'id', description: 'Product id', required: true })
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