import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewController } from './review.controller';
import { ReviewModel, ReviewSchema } from './models/review.model';
import { ReviewService } from './review.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ReviewModel.name, schema: ReviewSchema },
    ]),
  ],
  controllers: [ReviewController],
  providers: [ReviewService, ReviewModel],
})
export class ReviewModule {}
