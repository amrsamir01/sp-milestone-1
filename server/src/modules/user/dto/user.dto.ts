import { } from 'class-validator'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema()
export class User {
    @Prop({ required: true })
    name: string;
  
    @Prop({ required: true })
    email: string;
  
    @Prop({ required: true })
    password: string;
  
    @Prop({ required: true })
    confirm_password: string;
  
    @Prop({ required: true })
    phone: number;
  
    @Prop({ required: true })
    id: number;
}