import { Inject, Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { ReviewDocument, ReviewModel } from './review.model';
import { CreateRreviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewService {
  constructor(
    @Inject(ReviewModel) private readonly reviewModel: Model<ReviewModel>,
  ) {}

  async create(dto: CreateRreviewDto): Promise<ReviewDocument> {
    return this.reviewModel.create(dto);
  }

  async delete(id: string): Promise<ReviewDocument | null> {
    return this.reviewModel.findByIdAndDelete(id).exec();
  }

  async findByProductId(productId: string): Promise<ReviewDocument[]> {
    return this.reviewModel
      .find({ productId: new Types.ObjectId(productId) })
      .exec();
  }
}
