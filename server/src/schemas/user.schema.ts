import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

/*
  The @Schema() decorator marks a class as a schema definition.
  It maps the User class to a MongoDB collection of the same name,
  but with an additional “s” at the end - so the final mongo collection
  name will be users.

  For additional info, visit: https://docs.nestjs.com/techniques/mongodb
*/
@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  //@Prop({ required: true })
  //confirm_password: string;

  @Prop({ required: true })
  phone: number;

  @Prop({ required: true })
  userid: number;
}

export const UserSchema = SchemaFactory.createForClass(User);