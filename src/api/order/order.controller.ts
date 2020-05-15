import { Controller, Get, Res, Post, Body, Param, Patch, Delete } from "@nestjs/common";
import { ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";
import { getWoocommerce } from "../../common/function/basic-function";
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from "./dto/update-order.dto";
import { DeleteDto } from "../../common/dto/delete.dto";
const api = getWoocommerce();

@Controller('orders')
@ApiTags('Orders')
export class OrderController {
  @Post()
  @ApiOperation({ summary: 'Create an order' })
  createOrder(@Body() data: CreateOrderDto, @Res() res) {
    api.post('Orders', data)
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
  @ApiOperation({ summary: 'Retrieve an order' })
  @ApiParam({ name: 'id', description: 'order id', required: true })
  getOneOrder(@Param('id') id, @Res() res) {

    // List products
    api.get("Orders/" + id, {
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
  @ApiOperation({ summary: 'List all orders' })
  getAllOrder(@Res() res) {


    // List products
    api.get("Orders", {
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
  @ApiOperation({ summary: 'Update an order' })
  @ApiParam({ name: 'id', description: 'order id', required: true })
  updateOrder(@Body() data: UpdateOrderDto, @Param('id') id, @Res() res) {
    api.put("Orders/" + id, data)
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
  @ApiOperation({ summary: 'Delete an order' })
  @ApiParam({ name: 'id', description: 'order id', required: true })
  deleteOrder(@Body() data: DeleteDto, @Param('id') id, @Res() res) {
    api.delete("Orders/" + id, data)
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
  @ApiOperation({ summary: 'Batch update orders' })
  batchUpdateOrder(@Body() data, @Res() res) {
    api.post('Orders/batch', data)
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