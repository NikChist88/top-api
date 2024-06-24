import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ timestamps: true })
export class ReviewModel {
  @Prop()
  name: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  rating: number;

  @Prop()
  createdAt: Date
}

export type ReviewDocument = HydratedDocument<ReviewModel>;
export const ReviewSchema = SchemaFactory.createForClass(ReviewModel);
