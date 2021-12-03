import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AccountDocument = Account & Document;

@Schema()
export class Account {
  @Prop({ required: true })
  acc_num: number;

  @Prop({ required: true })
  balance: number;


}
export const AccountSchema = SchemaFactory.createForClass(Account);