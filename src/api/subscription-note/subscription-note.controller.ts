import { Controller, Delete, Body, Param, Res, Get, Post } from "@nestjs/common";
import { ApiTags, ApiParam, ApiOperation } from '@nestjs/swagger';
import { runServiceQueryV1 } from "../../common/function/basic-function";
import { DeleteDto } from "../../common/dto/delete.dto";

@ApiTags('Subscription note')
@Controller('subscription-note')
export class SubscriptionNoteController {
  @Post(':id')
  @ApiOperation({ summary: 'Create a subscription note' })
  @ApiParam({ name: 'id', description: 'subscription id', required: true })
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
  @ApiOperation({ summary: 'Retrieve a subscription note' })
  @ApiParam({ name: 'id', description: 'subscription id', required: true })
  @ApiParam({ name: 'note_id', description: 'subscription note id', required: true })
  getOneSubscriptionNote(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'subscriptions/' + params.id + '/notes/' + params.note_id;
    let dataQuery = {};
    let paramQuery = {};

    runServiceQueryV1([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Get(':id')
  @ApiOperation({ summary: 'List all subscription notes' })
  @ApiParam({ name: 'id', description: 'subscription id', required: true })
  getAllSubscriptionNote(@Param() params, @Res() res) {

    let method = 'get';
    let endpoint = 'subscriptions/' + params.id + '/notes';
    let dataQuery = {};
    let paramQuery = {};

    runServiceQueryV1([method, endpoint, dataQuery, paramQuery, res]);

  }

  @Delete(':id/:note_id')
  @ApiOperation({ summary: 'Delete a subscription' })
  @ApiParam({ name: 'id', description: 'Subscription id', required: true })
  @ApiParam({ name: 'note_id', description: 'subscription note id', required: true })
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