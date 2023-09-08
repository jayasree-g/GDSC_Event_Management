import { Controller, Get, Param, Delete, Post, Body } from '@nestjs/common';
import { EventsService } from './Events.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateEventDto } from './CreateEventDto';
import { Events } from './Events.model';
import { UpdateEventDto } from './UpdateEventDto';

@Controller('Events')
@ApiTags('Events')
export class EventsController {
  constructor(private readonly EventsService: EventsService) {}

  @Post('create')
  async addEvent(@Body() payload: CreateEventDto): Promise<Events | undefined> {
    return this.EventsService.addEvent(payload);
  }

  @Get('/get-events')
  async getAllEvents() {
    return this.EventsService.getAllEvents();
  }

  @Get('/get-eventId/:id')
  async getEventById(@Param('id') eventId: number) {
    return this.EventsService.getEventById(eventId);
  }

  @Delete('/delete-by-id/:id')
  async deleteEvent(@Param('id') eventId: number) {
    return this.EventsService.deleteEvent(eventId);
  }

  @Post('update')
  async updateEvent(
    @Body() payload: UpdateEventDto,
  ): Promise<Events | undefined> {
    return this.EventsService.updateEvent(payload);
  }
}
