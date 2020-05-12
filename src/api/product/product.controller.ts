import { Controller, Post, Body, Res, Get, Param, Patch, Delete } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiParam } from "@nestjs/swagger";
import { runServiceQuery } from "../../common/function/basic-function";
import { DeleteOrderDto } from "../order/dto/delete-order.dto";

@ApiTags('Products')
@Controller('products')
export class ProductController {
  @Post()
  @ApiOperation({ summary: 'Create a product' })
  createproduct(@Body() data: any, @Res() res) {
    const data1 = {
      name: "Premium Quality",
      type: "simple",
      regular_price: "21.99",
      description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
      short_description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      categories: [
        {
          id: 9
        },
        {
          id: 14
        }
      ],
      images: [
        {
          src: "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_front.jpg"
        },
        {
          src: "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_back.jpg"
        }
      ]
    };

    let method = 'post';
    let endpoint = 'products';
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

    // api.post('products', data)
    //   .then((response) => {
    //     res.send(response.data);
    //   })
    //   .catch((error) => {
    //     res.send(error.response.data);
    //   })
    //   .finally((result) => {
    //   });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a product' })
  @ApiParam({ name: 'id', description: 'product id', required: true })
  getOneproduct(@Param('id') id, @Res() res) {

    let method = 'get';
    let endpoint = 'products/' + id;
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

    // // List products
    // api.get("products/" + id, {
    //   per_page: 20, // 20 products per page
    // })
    //   .then((response) => {
    //     res.send(response.data);
    //   })
    //   .catch((error) => {
    //     res.send(error.response.data);
    //   })
    //   .finally((result) => {
    //   });

  }

  @Get()
  @ApiOperation({ summary: 'List all products' })
  getAllproduct(@Res() res) {

    let method = 'get';
    let endpoint = 'products';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a product' })
  @ApiParam({ name: 'id', description: 'product id', required: true })
  updateproduct(@Body() data: any, @Param('id') id, @Res() res) {
    const data1 = {
      regular_price: "24.54"
    };

    let method = 'patch';
    let endpoint = 'products';
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

    // api.put("products/" + id, data)
    //   .then((response) => {
    //     res.send(response.data);
    //   })
    //   .catch((error) => {
    //     res.send(error.response.data);
    //   })
    //   .finally((result) => {
    //   });
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a product' })
  @ApiParam({ name: 'id', description: 'product id', required: true })
  deleteproduct(@Body() data: DeleteOrderDto, @Param('id') id, @Res() res) {
    const data1 = {
      force: true
    }
    let method = 'delete';
    let endpoint = 'products/' + id;
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Post('batch')
  @ApiOperation({ summary: 'Batch update products' })
  batchUpdateproduct(@Body() data, @Res() res) {
    const data1 = {
      create: [
        {
          name: "Woo Single #1",
          type: "simple",
          regular_price: "21.99",
          virtual: true,
          downloadable: true,
          downloads: [
            {
              name: "Woo Single",
              file: "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/cd_4_angle.jpg"
            }
          ],
          categories: [
            {
              id: 11
            },
            {
              id: 13
            }
          ],
          images: [
            {
              src: "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/cd_4_angle.jpg"
            }
          ]
        },
        {
          name: "New Premium Quality",
          type: "simple",
          regular_price: "21.99",
          description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
          short_description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
          categories: [
            {
              id: 9
            },
            {
              id: 14
            }
          ],
          images: [
            {
              src: "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_front.jpg"
            },
            {
              src: "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_back.jpg"
            }
          ]
        }
      ],
      update: [
        {
          id: 799,
          default_attributes: [
            {
              id: 6,
              name: "Color",
              option: "Green"
            },
            {
              id: 0,
              name: "Size",
              option: "M"
            }
          ]
        }
      ],
      delete: [
        794
      ]
    };

    let method = 'post';
    let endpoint = 'products/batch';
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

}