import { Controller, Get, Res, Post, Body, Param, Patch, Delete } from "@nestjs/common";
import { ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";
import { getWoocommerce } from "../../common/function/basic-function";
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import { DeleteCustomerDto } from './dto/delete-customer.dto';
const api = getWoocommerce();

@Controller('customers')
@ApiTags('Customers')
export class CustomerController {
  @Post()
  @ApiOperation({ summary: 'Create a customer' })
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

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a customer' })
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

  @Get()
  @ApiOperation({ summary: 'List all customers' })
  getAllCustomer(@Res() res) {

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

  @Patch(':id')
  @ApiOperation({ summary: 'Update a customer' })
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

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a customer' })
  @ApiParam({ name: 'id', description: 'customer id', required: true })
  deleteCustomer(@Body() data: DeleteCustomerDto, @Param('id') id, @Res() res) {
    api.delete("customers/" + id, data)
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
  @ApiOperation({ summary: 'Batch update customers' })
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

  @Get('downloads/:id')
  @ApiOperation({ summary: 'Retrieve customer downloads' })
  @ApiParam({ name: 'id', description: 'customer id', required: true })
  getCustomerDownload(@Param('id') id, @Res() res) {

    // List products
    api.get("customers/" + id + "/downloads", {
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

}