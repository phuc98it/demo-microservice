import { CreateChargeDto } from "@app/common";
import { Type } from "class-transformer";
import { IsDate, IsDefined, IsNotEmpty, IsNotEmptyObject, IsString, ValidateNested } from "class-validator";

export class CreateReservationDto {
  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  startDate: Date;

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  endDate: Date;

  @IsDefined()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreateChargeDto)
  charge: CreateChargeDto;
}
