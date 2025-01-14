import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { JwtAuthGuard } from '@app/common/auth';
import { CurrentUser, UserDto } from '@app/common';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Body() createReservationDto: CreateReservationDto,
    @CurrentUser() user: any,
  ) {
    console.log("USER111111111 === ", user);
    return this.reservationsService.create(createReservationDto, user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('test')
  createTest(
    @Body() createReservationDto: CreateReservationDto,
    @CurrentUser() user: any,
  ) {
    console.log("USER222222222222222 === ", user);
    return this.reservationsService.createTest(createReservationDto.startDate,createReservationDto.endDate, user._id);
  }

  @Get()
  findAll() {
    return this.reservationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservationsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateReservationDto: UpdateReservationDto,
  ) {
    return this.reservationsService.update(id, updateReservationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservationsService.remove(id);
  }
}
