import { Module } from '@nestjs/common';
import {
  ConfigService,
  ConfigModule as NestConfigModule,
} from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        // MONGO_USERNAME: Joi.string().required(),
        // MONGO_PASSWORD: Joi.string().required(),
        // MONGO_DATABASE: Joi.string().required(),
        // MONGO_HOST: Joi.string().required(),
        // JWT_SECRET: Joi.string().required(),
        // JWT_EXPIRATION: Joi.string().required(),
        // PORT: Joi.number().required(),
        // PORT_AUTH: Joi.number().required(),
        // TCP_PORT_AUTH: Joi.number().required(),
        // AUTH_HOST: Joi.string().required(),
        // AUTH_PORT: Joi.number().required(),
        // PORT_PAYMENT: Joi.number().required(),
        // PAYMENTS_HOST: Joi.string().required(),
        // PAYMENTS_PORT: Joi.number().required(),
        // STRIPE_SECRET_KEY: Joi.string().required(),
        // PORT_NOTIFICATION: Joi.number().required(),
        // NOTIFICATION_HOST: Joi.string().required(),
        // NOTIFICATION_PORT: Joi.number().required(),
      }),
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
