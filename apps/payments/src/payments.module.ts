import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { DatabaseModule, LoggerModule } from '@app/common';

@Module({
  imports: [DatabaseModule, LoggerModule],
  controllers: [PaymentsController],
  providers: [PaymentsService],
})
export class PaymentsModule {}
