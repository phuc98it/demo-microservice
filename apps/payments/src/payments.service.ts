import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
import { PaymentsCreateChargeDto } from './dto/payments-create-charge.dto';
import { NOTIFICATIONS_SERVICE } from '@app/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class PaymentsService {
  constructor(
    private readonly configService : ConfigService,
    @Inject(NOTIFICATIONS_SERVICE) private readonly notificationsService: ClientProxy,
  ) {}

  private readonly stripe = new Stripe(
    this.configService.get('STRIPE_SECRET_KEY'),
    {
      apiVersion: '2023-10-16',
    }
  )

  async createCharge(
    { card, amount, email } : PaymentsCreateChargeDto
  ) {
    console.log("REQQQQQQQQQ1111111 ===== ", card)
    this.notificationsService.emit('notify_email', { email });
    const paymentMethod = await this.stripe.paymentMethods.create({
      type: 'card',
      card,
    });
    console.log("REQQQQQQQQQ2222222 ===== ")
    const paymentIntent = await this.stripe.paymentIntents.create({
      payment_method: paymentMethod.id,
      amount: amount * 100,
      confirm: true,
      payment_method_types: ['card'],
      currency: 'usd',
    })

    // this.notificationsService.emit('notify_email', { email });

    return paymentIntent;
  }

}
