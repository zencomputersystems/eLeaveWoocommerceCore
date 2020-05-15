import { Controller, Get, Res, Param, Post, Body, Patch, Delete } from "@nestjs/common";
import { ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";
import { getWoocommerce } from "../../common/function/basic-function";
import { CreateCouponDto } from "./dto/create-coupon.dto";
import { UpdateCouponDto } from "./dto/update-coupon.dto";
import { DeleteCouponDto } from "./dto/delete-coupon.dto";
import { BatchCouponDto } from "./dto/batch-coupon.dto";
const api = getWoocommerce();

@Controller('coupons')
@ApiTags('Coupons')
export class CouponController {

  @Post()
  @ApiOperation({ summary: 'Create a coupon' })
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

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a coupon' })
  @ApiParam({ name: 'id', description: 'Coupon id', required: true })
  getOneCoupon(@Param('id') id, @Res() res) {

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

  @Get()
  @ApiOperation({ summary: 'List all coupons' })
  getAllCoupon(@Res() res) {

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

  @Patch(':id')
  @ApiOperation({ summary: 'Update a coupon' })
  @ApiParam({ name: 'id', description: 'Coupon id', required: true })
  updateCoupon(@Body() data: UpdateCouponDto, @Param('id') id, @Res() res) {

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

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a coupon' })
  @ApiParam({ name: 'id', description: 'Coupon id', required: true })
  deleteCoupon(@Body() data: DeleteCouponDto, @Param('id') id, @Res() res) {

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

  @Post('batch')
  @ApiOperation({ summary: 'Batch update coupons' })
  batchUpdateCoupon(@Body() data: BatchCouponDto, @Res() res) {
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