import { IsDefined, IsNotEmptyObject, IsNumber, ValidateNested } from 'class-validator';
import { CardDto } from './card.dto';
import { Type } from 'class-transformer';

export class CreateChargeDto {
  @IsDefined()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CardDto)
  card: CardDto;                  // == Stripe.PaymentMethodCreateParams.Card1

  @IsNumber()
  amount: number;
}
