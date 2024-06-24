import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

export const getMongoConfig = async (
  configService: ConfigService,
): Promise<MongooseModuleOptions> => {
  return {
    uri: getMongoString(configService),
  };
};

const getMongoString = (configService: ConfigService) =>
  'mongodb://127.0.0.1:27017/mongo';
