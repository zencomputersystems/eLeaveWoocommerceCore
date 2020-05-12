import { ApiTags, ApiOperation, ApiParam } from "@nestjs/swagger";
import { Controller, Post, Res, Param, Body, Get, Delete } from "@nestjs/common";
import { runServiceQuery } from '../../common/function/basic-function';
import { DeleteOrderDto } from "../order/dto/delete-order.dto";

@ApiTags('Order notes')
@Controller('order-notes')
export class OrderNotesController {

  @Post(':id')
  @ApiOperation({ summary: 'Create an order note' })
  @ApiParam({ name: 'id', description: 'Order id', required: true })
  createOrderNote(@Param('id') id, @Body() data: any, @Res() res) {
    const data1 = {
      note: "Order ok!!!"
    };
    let method = 'post';
    let endpoint = 'orders/' + id + '/notes';
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);
    // api.post("Order notess", data).then((response) => {
    //   res.send(response.data);
    // })
    //   .catch((error) => {
    //     res.send(error.response.data);
    //   })
    //   .finally((result) => {
    //   });
  }

  @Get(':id/:note_id')
  @ApiOperation({ summary: 'Retrieve an order note' })
  @ApiParam({ name: 'id', description: 'Order id', required: true })
  @ApiParam({ name: 'note_id', description: 'Notes id', required: true })
  getOneOrderNotes(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'orders/' + params.id + '/notes/' + params.note_id;
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

    // api.get("Order notess/" + id, {
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

  @Get(':id')
  @ApiOperation({ summary: 'List all order notes' })
  @ApiParam({ name: 'id', description: 'Order id', required: true })
  getAllOrderNotes(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'orders/' + params.id + '/notes';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

    // // List products
    // api.get("Order notess", {
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

  @Delete(':id/:note_id')
  @ApiOperation({ summary: 'Delete an order note' })
  @ApiParam({ name: 'id', description: 'Order notes id', required: true })
  @ApiParam({ name: 'note_id', description: 'Notes id', required: true })
  deleteOrderNotes(@Param() params, @Body() data: DeleteOrderDto, @Res() res) {

    let method = 'delete';
    let endpoint = 'orders/' + params.id + '/notes/' + params.note_id;
    let dataQuery = {};
    let paramQuery = data;

    runServiceQuery([method, endpoint, dataQuery, paramQuery, res]);

    // api.delete("Order notess/" + id, data)
    //   .then((response) => {
    //     res.send(response.data);
    //   })
    //   .catch((error) => {
    //     res.send(error.response.data);
    //   })
    //   .finally((result) => {
    //   });

  }

}