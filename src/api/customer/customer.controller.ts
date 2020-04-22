import { Controller, Get, Res, Post, Body, Param, Patch, Delete } from "@nestjs/common";
import { ApiOperation, ApiParam } from "@nestjs/swagger";
import { getWoocommerce } from "../../common/function/basic-function";
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from "./dto/update-customer.dto";
const api = getWoocommerce();

@Controller('customer')
// @UseGuards(AuthGuard('oauth'))
export class CustomerController {
  @Post('customer')
  @ApiOperation({ summary: 'create customer' })
  createCustomer(@Body() data: CreateCustomerDto, @Res() res) {
    api.post('customers', data)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        res.send(error.response.data);
      })
      .finally((result) => {
      });
  }

  @Get('customer')
  @ApiOperation({ summary: 'List all customer' })
  getAllCustomer(@Res() res) {


    // List products
    api.get("customers", {
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

  @Get('customer/:id')
  @ApiOperation({ summary: 'get customer' })
  @ApiParam({ name: 'id', description: 'customer id', required: true })
  getOneCustomer(@Param('id') id, @Res() res) {

    // List products
    api.get("customers/" + id, {
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

  @Patch('customer/:id')
  @ApiOperation({ summary: 'update customer' })
  @ApiParam({ name: 'id', description: 'customer id', required: true })
  updateCustomer(@Body() data: UpdateCustomerDto, @Param('id') id, @Res() res) {
    api.put("customers/" + id, data)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        res.send(error.response.data);
      })
      .finally((result) => {
      });
  }

  @Delete('customer/:id')
  @ApiOperation({ summary: 'delete customer' })
  @ApiParam({ name: 'id', description: 'customer id', required: true })
  deleteCustomer(@Param('id') id, @Res() res) {
    api.delete("customers/" + id)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        res.send(error.response.data);
      })
      .finally((result) => {
      });
  }

  @Post('customer/batch')
  @ApiOperation({ summary: 'update customer by batch' })
  batchUpdateCustomer(@Body() data, @Res() res) {
    api.post('customers/batch', data)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        res.send(error.response.data);
      })
      .finally((result) => {
      });
  }

}