import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TransactionDocument = Transaction & Document;

@Schema()
export class Transaction {

  @Prop({ required: true })
  name: string;

  @Prop({ required: false })
  credit: number;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  accountid: string;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);