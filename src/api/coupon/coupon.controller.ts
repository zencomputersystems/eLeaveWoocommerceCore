import { Controller, UseGuards, Get, Res, HttpService, Param, Query, Post, Body, Patch, Delete } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiBearerAuth, ApiQuery, ApiParam } from "@nestjs/swagger";
import { EXAMPLE_CONSUMER_KEY, EXAMPLE_CONSUMER_SECRET } from '../../auth/constant/basic-info';
import { getWoocommerce } from "../../common/function/basic-function";
import { CreateCouponDto } from "./dto/create-coupon.dto";
import { UpdateCouponDto } from "./dto/update-coupon.dto";
import { DeleteCouponDto } from "./dto/delete-coupon.dto";
import { BatchCouponDto } from "./dto/batch-coupon.dto";
const querystring = require('querystring');

const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const api = getWoocommerce();

@Controller('coupon')
// @UseGuards(AuthGuard('oauth'))
export class CouponController {
  constructor(private readonly httpService: HttpService) { }
  // @Get()
  // @ApiOperation({ summary: 'get coupon' })
  // @ApiQuery({ name: 'oauth_consumer_key', example: 'ck_2e8ef46499721b30e0a37726e34377325dda1ca9' })
  // @ApiQuery({ name: 'oauth_signature_method', example: 'HMAC-SHA1' })
  // @ApiQuery({name:''})
  // @ApiQuery({name:''})
  // @ApiQuery({name:''})
  // @ApiQuery({name:''})
  // getAllCoupon(@Query() params, @Res() res) {
  //   console.log(params);
  //   const query_string = querystring.stringify(params).replace(/%20/g, '+');
  //   console.log(query_string);
  //   this.httpService.get('http://139.99.76.109:30002/wp-json/wc/v3/coupons?' + query_string).subscribe(
  //     data => {
  //       console.log('1');
  //       res.send(data);
  //     }, err => {
  //       console.log('2');
  //       res.send(err);
  //     }
  //   )

  // }

  @Get('coupon')
  @ApiOperation({ summary: 'get coupon' })
  getAllCoupon(@Query() params, @Res() res) {

    // List products
    api.get("coupons", {
      per_page: 20, // 20 products per page
    })
      .then((response) => {
        // Successful request
        // console.log("Response Status:", response.status);
        // console.log("Response Headers:", response.headers);
        // console.log("Response Data:", response.data);
        // console.log("Total of pages:", response.headers['x-wp-totalpages']);
        // console.log("Total of items:", response.headers['x-wp-total']);
        res.send(response.data);
      })
      .catch((error) => {
        // Invalid request, for 4xx and 5xx statuses
        // console.log("Error Response Status:", error.response.status);
        // console.log("Error Response Headers:", error.response.headers);
        // console.log("Error Response Data:", error.response.data);
        res.send(error.response.data);
      })
      .finally((result) => {
        // Always executed.
        // res.send(result);
      });

  }

  @Get('coupon/:id')
  @ApiOperation({ summary: 'get coupon' })
  @ApiParam({ name: 'id', description: 'Coupon id', required: true })
  getOneCoupon(@Param('id') id, @Res() res) {


    // List products
    api.get("coupons/" + id, {
      per_page: 20, // 20 products per page
    })
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        res.send(error.response.data);
      })
      .finally((result) => {
      });

  }

  @Post('coupon')
  @ApiOperation({ summary: 'Create coupon' })
  createCoupon(@Body() data: CreateCouponDto, @Res() res) {
    api.post("coupons", data).then((response) => {
      res.send(response.data);
    })
      .catch((error) => {
        res.send(error.response.data);
      })
      .finally((result) => {
      });
  }

  @Patch('coupon/:id')
  @ApiOperation({ summary: 'get coupon' })
  @ApiParam({ name: 'id', description: 'Coupon id', required: true })
  updateCoupon(@Body() data: UpdateCouponDto, @Param('id') id, @Res() res) {


    // List products
    api.put("coupons/" + id, data)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        res.send(error.response.data);
      })
      .finally((result) => {
      });

  }

  @Delete('coupon/:id')
  @ApiOperation({ summary: 'get coupon' })
  @ApiParam({ name: 'id', description: 'Coupon id', required: true })
  deleteCoupon(@Body() data: DeleteCouponDto, @Param('id') id, @Res() res) {


    // List products
    api.delete("coupons/" + id, data)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        res.send(error.response.data);
      })
      .finally((result) => {
      });

  }

  @Post('coupon/batch')
  @ApiOperation({ summary: 'Update batch coupon' })
  updateBatchCoupon(@Body() data: BatchCouponDto, @Res() res) {
    api.post("coupons/batch", data).then((response) => {
      res.send(response.data);
    })
      .catch((error) => {
        res.send(error.response.data);
      })
      .finally((result) => {
      });
  }

}