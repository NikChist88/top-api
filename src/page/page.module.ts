import { Module } from '@nestjs/common';
import { PageController } from './page.controller';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PageModel, PageSchema } from './page.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PageModel.name, schema: PageSchema },
    ]),
  ],
  controllers: [PageController],
  providers: [ConfigService],
})
export class PageModule {}
