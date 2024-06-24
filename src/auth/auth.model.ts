import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ timestamps: true })
export class AuthModel {
  @Prop({ unique: true, required: true })
  email: string;

  @Prop({ required: true })
  hash: string;
}

export type AuthDocument = HydratedDocument<AuthModel>;
export const AuthSchema = SchemaFactory.createForClass(AuthModel);
