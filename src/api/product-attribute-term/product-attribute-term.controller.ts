import { Controller, Post, Body, Res, Get, Param, Patch, Delete } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiParam } from "@nestjs/swagger";
import { runServiceQuery } from "../../common/function/basic-function";
import { DeleteDto } from "../../common/dto/delete.dto";

@ApiTags('Product attribute terms')
@Controller('product-attribute-term')
export class ProductAttributeTermController {
  @Post(':id')
  @ApiOperation({ summary: 'Create a product attribute' })
  @ApiParam({ name: 'id', description: 'Product id', required: true })
  createProductattributes(@Param() params, @Body() data: any, @Res() res) {
    const data1 = {
      name: "XXS"
    };

    let method = 'post';
    let endpoint = 'products/attributes/' + params.id + '/terms';
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get(':id/:attribute_id')
  @ApiOperation({ summary: 'Retrieve a product attribute' })
  @ApiParam({ name: 'id', description: 'Product id', required: true })
  @ApiParam({ name: 'attribute_id', description: 'Product attribute id', required: true })
  getOneProductattributes(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'products/attributes/' + params.attribute_id + '/terms/' + params.id;
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get(':attribute_id')
  @ApiOperation({ summary: 'List all product attributess' })
  @ApiParam({ name: 'attribute_id', description: 'Product attribute id', required: true })
  getAllProductattributes(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'products/attributes/' + params.attribute_id + '/terms';
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
      name: "XXS"
    };

    let method = 'patch';
    let endpoint = 'products/attributes/' + params.attribute_id + '/terms/' + params.id;
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
    let endpoint = 'products/attributes/' + params.attribute_id + '/terms/' + params.id;
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Post('batch/:attribute_id')
  @ApiOperation({ summary: 'Batch update product attributess' })
  @ApiParam({ name: 'attribute_id', description: 'Product id', required: true })
  batchUpdateProductattributes(@Param() params, @Body() data, @Res() res) {
    const data1 = {
      create: [
        {
          name: "XXS"
        },
        {
          name: "S"
        }
      ],
      update: [
        {
          id: 19,
          menu_order: 6
        }
      ],
      delete: [
        21,
        20
      ]
    };

    let method = 'post';
    let endpoint = 'products/attributes/' + params.attribute_id + '/terms/batch';
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }
}