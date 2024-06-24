import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export enum PageCategory {
  Courses,
  Services,
  Books,
  Products,
}

export class HhData {
  @Prop()
  count: number;

  @Prop()
  juniorSalary: number;

  @Prop()
  middleSalary: number;

  @Prop()
  seniorSalary: number;
}

export class PageAdvantage {
  @Prop()
  title: string;

  @Prop()
  description: string;
}

@Schema({ timestamps: true })
export class PageModel {
  @Prop({ enum: PageCategory })
  firstCategory: PageCategory;

  @Prop({ unique: true })
  alias: string;

  @Prop()
  secondCategory: string;

  @Prop()
  title: string;

  @Prop()
  category: string;

  @Prop({ type: () => HhData })
  hh?: HhData;

  @Prop({ type: () => [PageAdvantage] })
  advantages: PageAdvantage[];

  @Prop()
  seoText: string;

  @Prop()
  tagsTitle: string;

  @Prop({ type: () => [String] })
  tags: string[];
}

export type PageDocument = HydratedDocument<PageModel>;
export const PageSchema = SchemaFactory.createForClass(PageModel);
