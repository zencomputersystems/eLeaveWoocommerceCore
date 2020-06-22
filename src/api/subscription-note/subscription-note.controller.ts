import { Controller, Delete, Body, Param, Res, Get, Post } from "@nestjs/common";
import { ApiUseTags, ApiImplicitParam, ApiOperation } from '@nestjs/swagger';
import { runServiceQueryV1 } from "../../common/function/basic-function";
import { DeleteDto } from "../../common/dto/delete.dto";

@ApiUseTags('Subscription note')
@Controller('subscription-note')
export class SubscriptionNoteController {
  @Post(':id')
  @ApiOperation({ title: 'Create a subscription note' })
  @ApiImplicitParam({ name: 'id', description: 'subscription id', required: true })
  createSubscriptionNote(@Param() params, @Body() data: any, @Res() res) {
    const data1 = {
      note: 'Subscription ok!!!'
    };

    let method = 'post';
    let endpoint = 'subscriptions/' + params.id + '/notes';
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQueryV1([method, endpoint, dataQuery, paramQuery, res]);
  }

  @Get(':id/:note_id')
  @ApiOperation({ title: 'Retrieve a subscription note' })
  @ApiImplicitParam({ name: 'id', description: 'subscription id', required: true })
  @ApiImplicitParam({ name: 'note_id', description: 'subscription note id', required: true })
  getOneSubscriptionNote(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'subscriptions/' + params.id + '/notes/' + params.note_id;
    let dataQuery = {};
    let paramQuery = {};

    runServiceQueryV1([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get(':id')
  @ApiOperation({ title: 'List all subscription notes' })
  @ApiImplicitParam({ name: 'id', description: 'subscription id', required: true })
  getAllSubscriptionNote(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'subscriptions/' + params.id + '/notes';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQueryV1([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Delete(':id/:note_id')
  @ApiOperation({ title: 'Delete a subscription' })
  @ApiImplicitParam({ name: 'id', description: 'Subscription id', required: true })
  @ApiImplicitParam({ name: 'note_id', description: 'subscription note id', required: true })
  deleteSubscriptionNote(@Body() data: DeleteDto, @Param() params, @Res() res) {
    const data1 = {
      force: true
    }
    let method = 'delete';
    let endpoint = 'subscriptions/' + params.id + '/notes/' + params.note_id;
    let dataQuery = data1;
    let paramQuery = {};

    runServiceQueryV1([method, endpoint, dataQuery, paramQuery, res]);

  }
}