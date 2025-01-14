import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ModelDefinition, MongooseModule } from '@nestjs/mongoose';
// import { ConfigModule } from '../config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      // imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        // const username = configService.get('MONGO_USERNAME');
        // const password = configService.get('MONGO_PASSWORD');
        // const database = configService.get('MONGO_DATABASE');
        // const host = configService.get('MONGO_HOST');
        uri: configService.get('MONGODB_URI'),
        // return {
        //   uri: `mongodb://${username}:${password}@${host}`,
        //   dbName: database,
        // };
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {
  static forFeature(models: ModelDefinition[]) {
    return MongooseModule.forFeature(models);
  }
}
