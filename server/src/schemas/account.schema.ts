import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AccountDocument = Account & Document;

@Schema()
export class Account {
  @Prop({ required: true })
  userid:string;

  @Prop({ required: true })
  status: string;
  
  @Prop({ required: true })
  accountid: string;
  
 @Prop({ required: true })
  balance: number;


}
export const AccountSchema = SchemaFactory.createForClass(Account);
