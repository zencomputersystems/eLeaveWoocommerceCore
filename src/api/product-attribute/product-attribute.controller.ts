import { Controller, Post, Param, Body, Res, Get, Patch, Delete } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiParam } from "@nestjs/swagger";
import { runServiceQuery } from "../../common/function/basic-function";
import { DeleteDto } from "../../common/dto/delete.dto";

@ApiTags('Product attributes')
@Controller('product-attributes')
export class ProductAttributeController {
  @Post()
  @ApiOperation({ summary: 'Create a product attribute' })
  createProductattributes(@Body() data: any, @Res() res) {
    const data1 = {
      name: "Color",
      slug: "pa_color",
      type: "select",
      order_by: "menu_order",
      has_archives: true
    };

    let method = 'post';
    let endpoint = 'products/attributes';
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a product attribute' })
  @ApiParam({ name: 'id', description: 'Product id', required: true })
  getOneProductattributes(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'products/attributes/' + params.id;
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get()
  @ApiOperation({ summary: 'List all product attributess' })
  getAllProductattributes(@Res() res) {

    let method = 'get';
    let endpoint = 'products/attributes';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Patch(':id/:attribute_id')
  @ApiOperation({ summary: 'Update a product attributes' })
  @ApiParam({ name: 'id', description: 'Product id', required: true })
  @ApiParam({ name: 'attribute_id', description: 'attributes id', required: true })
  updateProductattributes(@Body() data: any, @Param() params, @Res() res) {
    const data1 = {
      regular_price: "10.00"
    };

    let method = 'patch';
    let endpoint = 'products/' + params.id + '/attributes/' + params.attribute_id;
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a product-attributes' })
  @ApiParam({ name: 'id', description: 'product-attributes id', required: true })
  @ApiParam({ name: 'attribute_id', description: 'attributes id', required: true })
  deleteProductattributes(@Body() data: DeleteDto, @Param() params, @Res() res) {
    const data1 = {
      force: true
    }
    let method = 'delete';
    let endpoint = 'products/' + params.id + '/attributes/' + params.attribute_id;
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Post('batch/:id')
  @ApiOperation({ summary: 'Batch update product attributess' })
  @ApiParam({ name: 'id', description: 'Product id', required: true })
  batchUpdateProductattributes(@Param() params, @Body() data, @Res() res) {
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
    let endpoint = 'products/' + params.id + '/attributes/batch';
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }
}