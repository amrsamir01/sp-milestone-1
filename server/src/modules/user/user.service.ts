import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '@sp/schemas';
import { Model } from 'mongoose';
import { RegisterDTO } from './dto/user.dto';
import { AuthDto } from '../auth/dtos/auth.dto';

import { JwtService } from '@nestjs/jwt';


@Injectable()
export class UserService {
  create: any;
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  /**
   * Returns all users from mongo database
   */
 
   // async find(dto:AuthDto):Promise<User>{
   //   return await this.userModel.findOne({ email: dto.email, password: dto.password}).exec();
   // }
 
   
  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
  private sanitizedUser(user: any){
   return user.depopulate('password');
  }
   async createUser(userDto: RegisterDTO){
    console.log(userDto);
    const {username} = userDto;
    const user = await this.userModel.findOne({username});
    if(user){
      throw new HttpException('user already exist', HttpStatus.BAD_REQUEST);
    }
    const createUser = new this.userModel(userDto);
    createUser.balance = 100;
    await createUser.save();
    return this.sanitizedUser(createUser);
    //add the users to database
  }

  async findOne(dto:AuthDto, email:string, password:string):Promise <any>{
    return await this.userModel.findOne({ email: dto.email, password: dto.password }).exec();
  }
}
