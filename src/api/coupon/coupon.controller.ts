import { Controller, Get, Res, Param, Post, Body, Patch, Delete } from "@nestjs/common";
import { ApiOperation, ApiImplicitParam, ApiUseTags } from "@nestjs/swagger";
import { getWoocommerce, runServiceQuery } from "../../common/function/basic-function";
import { CreateCouponDto } from "./dto/create-coupon.dto";
import { UpdateCouponDto } from "./dto/update-coupon.dto";
import { DeleteCouponDto } from "./dto/delete-coupon.dto";
import { BatchCouponDto } from "./dto/batch-coupon.dto";
// const api = getWoocommerce();

@Controller('coupons')
@ApiUseTags('Coupons')
export class CouponController {

  @Post()
  @ApiOperation({ title: 'Create a coupon' })
  createCoupon(@Body() data: CreateCouponDto, @Res() res) {

    let method = 'post';
    let endpoint = 'coupons';
    let dataQuery = data;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

    // api.post("coupons", data).then((response) => {
    //   res.send(response.data);
    // })
    //   .catch((error) => {
    //     res.send(error.response.data);
    //   })
    //   .finally((result) => {
    //   });
  }

  @Get(':id')
  @ApiOperation({ title: 'Retrieve a coupon' })
  @ApiImplicitParam({ name: 'id', description: 'Coupon id', required: true })
  getOneCoupon(@Param('id') id, @Res() res) {

    let method = 'get';
    let endpoint = 'coupons' + id;
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

    // api.get("coupons/" + id, {
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
  @ApiOperation({ title: 'List all coupons' })
  getAllCoupon(@Res() res) {

    let method = 'get';
    let endpoint = 'coupons';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

    // // List products
    // api.get("coupons", {
    //   per_page: 20, // 20 products per page
    // })
    //   .then((response) => {
    //     // Successful request
    //     // console.log("Response Status:", response.status);
    //     // console.log("Response Headers:", response.headers);
    //     // console.log("Response Data:", response.data);
    //     // console.log("Total of pages:", response.headers['x-wp-totalpages']);
    //     // console.log("Total of items:", response.headers['x-wp-total']);
    //     res.send(response.data);
    //   })
    //   .catch((error) => {
    //     // Invalid request, for 4xx and 5xx statuses
    //     // console.log("Error Response Status:", error.response.status);
    //     // console.log("Error Response Headers:", error.response.headers);
    //     // console.log("Error Response Data:", error.response.data);
    //     res.send(error.response.data);
    //   })
    //   .finally((result) => {
    //     // Always executed.
    //     // res.send(result);
    //   });

  }

  @Patch(':id')
  @ApiOperation({ title: 'Update a coupon' })
  @ApiImplicitParam({ name: 'id', description: 'Coupon id', required: true })
  updateCoupon(@Body() data: UpdateCouponDto, @Param('id') id, @Res() res) {

    let method = 'patch';
    let endpoint = 'coupons' + id;
    let dataQuery = data;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

    // api.put("coupons/" + id, data)
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
  @ApiOperation({ title: 'Delete a coupon' })
  @ApiImplicitParam({ name: 'id', description: 'Coupon id', required: true })
  deleteCoupon(@Body() data: DeleteCouponDto, @Param('id') id, @Res() res) {

    let method = 'delete';
    let endpoint = 'coupons/' + id;
    let dataQuery = data;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

    // api.delete("coupons/" + id, data)
    //   .then((response) => {
    //     res.send(response.data);
    //   })
    //   .catch((error) => {
    //     res.send(error.response.data);
    //   })
    //   .finally((result) => {
    //   });

  }

  @Post('batch')
  @ApiOperation({ title: 'Batch update coupons' })
  batchUpdateCoupon(@Body() data: BatchCouponDto, @Res() res) {
    let method = 'delete';
    let endpoint = 'coupons/batch';
    let dataQuery = data;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

    // api.post("coupons/batch", data).then((response) => {
    //   res.send(response.data);
    // })
    //   .catch((error) => {
    //     res.send(error.response.data);
    //   })
    //   .finally((result) => {
    //   });
  }

}