import { Controller, Post, Body, Res, Get, Param, Patch, Delete } from "@nestjs/common";
import { ApiUseTags, ApiOperation, ApiImplicitParam } from '@nestjs/swagger';
import { runServiceQueryV1 } from "../../common/function/basic-function";
import { DeleteDto } from "../../common/dto/delete.dto";
import { UpdateSubscriptionDto } from "./dto/update-subscription.dto";
import { CreateSubscriptionDto } from "./dto/create-subscription.dto";

@ApiUseTags('Subscription')
@Controller('subscription')
export class SubscriptionController {
  @Post()
  @ApiOperation({ title: 'Create a subscription' })
  createSubscription(@Body() data: CreateSubscriptionDto, @Res() res) {
    let data1 = {
      customer_id: 1,
      status: 'active',
      billing_period: 'month',
      billing_interval: 1,
      start_date: '2016-04-04 10:45:00',
      next_payment_date: '2017-01-01 10:45:00',
      payment_method: 'stripe',
      payment_details: {
        post_meta: {
          _stripe_customer_id: 'cus_484hfj3m4fm3',
          _stripe_card_id: 'card_5n4fndsn0'
        }
      },
      billing: {
        first_name: 'John',
        last_name: 'Doe',
        address_1: '969 Market',
        address_2: '',
        city: 'San Francisco',
        state: 'CA',
        postcode: '94103',
        country: 'US',
        email: 'john.doe@example.com',
        phone: '(555) 555-5555'
      },
      shipping: {
        first_name: 'John',
        last_name: 'Doe',
        address_1: '969 Market',
        address_2: '',
        city: 'San Francisco',
        state: 'CA',
        postcode: '94103',
        country: 'US'
      },
      line_items: [
        {
          product_id: 93,
          quantity: 2
        },
        {
          product_id: 22,
          variation_id: 23,
          quantity: 1
        }
      ],
      shipping_lines: [
        {
          method_id: 'flat_rate',
          method_title: 'Flat Rate',
          total: "10"
        }
      ]
    };

    // data1 = data;

    let method = 'post';
    let endpoint = 'subscriptions';
    let dataQuery = data;
    let paramQuery = {};

    runServiceQueryV1([method, endpoint, dataQuery, paramQuery, res]);
  }

  @Get(':id')
  @ApiOperation({ title: 'Retrieve a subscription' })
  @ApiImplicitParam({ name: 'id', description: 'subscription id', required: true })
  getOneSubscription(@Param('id') id, @Res() res) {

    let method = 'get';
    let endpoint = 'subscriptions/' + id;
    let dataQuery = {};
    let paramQuery = {};

    runServiceQueryV1([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get()
  @ApiOperation({ title: 'List all subscriptions' })
  getAllSubscription(@Res() res) {

    let method = 'get';
    let endpoint = 'subscriptions';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQueryV1([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get('customer/:customer_id')
  @ApiOperation({ title: 'List all subscriptions by customer' })
  @ApiImplicitParam({ name: 'customer_id', description: 'Customer id' })
  getSubsByCustomer(@Param() param, @Res() res) {
    let method = 'get';
    let endpoint = 'subscriptions';
    let dataQuery = {};
    let paramQuery = { customer: param.customer_id };

    runServiceQueryV1([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Patch(':id')
  @ApiOperation({ title: 'Update a subscription' })
  @ApiImplicitParam({ name: 'id', description: 'Subscription id', required: true })
  updateSubscription(@Body() data: UpdateSubscriptionDto, @Param('id') id, @Res() res) {
    let lineItems = [{
      name: "FOC Ala carte",
      // sku: "",
      product_id: 267,
      // variation_id: 0,
      quantity: 50,
      // tax_class: "",
      // price: "0.00",
      // subtotal: "0.00",
      // subtotal_tax: "0.00",
      // total: "0.00",
      // total_tax: "0.00",
      // taxes: [],
      // meta: []
    }];
    // let data1 = {
    //   status: 'on-hold',
    //   line_items: lineItems
    // };

    let data1 = data;

    console.log(data1);

    let method = 'patch';
    let endpoint = 'subscriptions/' + id;
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQueryV1([method, endpoint, dataQuery, paramQuery, res]);
  }

  @Delete(':id')
  @ApiOperation({ title: 'Delete a subscription' })
  @ApiImplicitParam({ name: 'id', description: 'Subscription id', required: true })
  deleteSubscription(@Body() data: DeleteDto, @Param('id') id, @Res() res) {
    const data1 = {
      force: true
    }
    let method = 'delete';
    let endpoint = 'subscriptions/' + id;
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQueryV1([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Post('batch')
  @ApiOperation({ title: 'Batch update subscriptions' })
  updateBatchSubscription(@Body() data: any, @Res() res) {
    const data1 = {
      create: [
        {
          customer_id: 1,
          billing_interval: 1,
          billing_period: 'month',
          payment_method: 'bacs',
          payment_method_title: 'Direct Bank Transfer',
          billing: {
            first_name: 'John',
            last_name: 'Doe',
            address_1: '969 Market',
            address_2: '',
            city: 'San Francisco',
            state: 'CA',
            postcode: '94103',
            country: 'US',
            email: 'john.doe@example.com',
            phone: '(555) 555-5555'
          },
          shipping: {
            first_name: 'John',
            last_name: 'Doe',
            address_1: '969 Market',
            address_2: '',
            city: 'San Francisco',
            state: 'CA',
            postcode: '94103',
            country: 'US'
          },
          line_items: [
            {
              product_id: 11,
              quantity: 2
            },
            {
              product_id: 28,
              quantity: 1
            }
          ],
          shipping_lines: [
            {
              method_id: 'flat_rate',
              method_title: 'Flat Rate',
              total: 30
            }
          ]
        },
        {
          customer_id: 1,
          billing_interval: 1,
          billing_period: 'month',
          payment_method: 'bacs',
          payment_method_title: 'Direct Bank Transfer',
          set_paid: true,
          billing: {
            first_name: 'John',
            last_name: 'Doe',
            address_1: '969 Market',
            address_2: '',
            city: 'San Francisco',
            state: 'CA',
            postcode: '94103',
            country: 'US',
            email: 'john.doe@example.com',
            phone: '(555) 555-5555'
          },
          shipping: {
            first_name: 'John',
            last_name: 'Doe',
            address_1: '969 Market',
            address_2: '',
            city: 'San Francisco',
            state: 'CA',
            postcode: '94103',
            country: 'US'
          },
          line_items: [
            {
              product_id: 28,
              quantity: 2
            }
          ],
          shipping_lines: [
            {
              method_id: 'flat_rate',
              method_title: 'Flat Rate',
              total: 20
            }
          ]
        }
      ],
      update: [
        {
          id: 316,
          status: 'active'
        }
      ],
      delete: [
        299
      ]
    };

    let method = 'post';
    let endpoint = 'subscriptions/batch';
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQueryV1([method, endpoint, dataQuery, paramQuery, res]);
  }

  @Get('statuses')
  @ApiOperation({ title: 'Get statuses subscriptions' })
  getStatusesSubscription(@Res() res) {

    let method = 'get';
    let endpoint = 'subscriptions/statuses';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQueryV1([method, endpoint, dataQuery, paramQuery, res]);

  }

}