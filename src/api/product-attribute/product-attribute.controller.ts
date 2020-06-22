import { Controller, Post, Param, Body, Res, Get, Patch, Delete } from "@nestjs/common";
import { ApiUseTags, ApiOperation, ApiImplicitParam } from "@nestjs/swagger";
import { runServiceQuery } from "../../common/function/basic-function";
import { DeleteDto } from "../../common/dto/delete.dto";

@ApiUseTags('Product attributes')
@Controller('product-attributes')
export class ProductAttributeController {
  @Post()
  @ApiOperation({ title: 'Create a product attribute' })
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
  @ApiOperation({ title: 'Retrieve a product attribute' })
  @ApiImplicitParam({ name: 'id', description: 'Product id', required: true })
  getOneProductattributes(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'products/attributes/' + params.id;
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get()
  @ApiOperation({ title: 'List all product attributess' })
  getAllProductattributes(@Res() res) {

    let method = 'get';
    let endpoint = 'products/attributes';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Patch(':id/:attribute_id')
  @ApiOperation({ title: 'Update a product attributes' })
  @ApiImplicitParam({ name: 'id', description: 'Product id', required: true })
  @ApiImplicitParam({ name: 'attribute_id', description: 'attributes id', required: true })
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
  @ApiOperation({ title: 'Delete a product-attributes' })
  @ApiImplicitParam({ name: 'id', description: 'product-attributes id', required: true })
  @ApiImplicitParam({ name: 'attribute_id', description: 'attributes id', required: true })
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
  @ApiOperation({ title: 'Batch update product attributess' })
  @ApiImplicitParam({ name: 'id', description: 'Product id', required: true })
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