import { Controller, Get, Res } from "@nestjs/common";
import { ApiTags, ApiOperation } from "@nestjs/swagger";
import { runServiceQuery } from "../../common/function/basic-function";

@ApiTags('Report')
@Controller('report')
export class ReportController {
  @Get()
  @ApiOperation({ summary: 'List all reports' })
  getAllReports(@Res() res) {

    let method = 'get';
    let endpoint = 'reports';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get('sales')
  @ApiOperation({ summary: 'Retrieve sales report' })
  getSalesReport(@Res() res) {

    let method = 'get';
    let endpoint = 'reports/sales';
    let dataQuery = {
      date_min: "2016-05-03",
      date_max: "2016-05-04"
    };
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get('top-seller')
  @ApiOperation({ summary: 'Retrieve top sellers report' })
  getTopSellersReport(@Res() res) {

    let method = 'get';
    let endpoint = 'reports/top_sellers';
    let dataQuery = {
      period: "last_month"
    };
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get('coupons-total')
  @ApiOperation({ summary: 'Retrieve coupons totals' })
  getCouponsTotal(@Res() res) {

    let method = 'get';
    let endpoint = 'reports/coupons/totals';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get('customers-total')
  @ApiOperation({ summary: 'Retrieve customers totals' })
  getCustomersTotal(@Res() res) {

    let method = 'get';
    let endpoint = 'reports/customers/totals';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get('orders-total')
  @ApiOperation({ summary: 'Retrieve orders totals' })
  getOrdersTotal(@Res() res) {

    let method = 'get';
    let endpoint = 'reports/orders/totals';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get('products-total')
  @ApiOperation({ summary: 'Retrieve products totals' })
  getProductsTotal(@Res() res) {

    let method = 'get';
    let endpoint = 'reports/products/totals';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get('reviews-total')
  @ApiOperation({ summary: 'Retrieve customers totals' })
  getReviewssTotal(@Res() res) {

    let method = 'get';
    let endpoint = 'reports/reviews/totals';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

  }

}