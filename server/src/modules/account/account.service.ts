import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Account, AccountDocument } from '@sp/schemas';
import { Model } from 'mongoose';

@Injectable()
export class accountService {
  constructor(@InjectModel(Account.name) private accountModel: Model<AccountDocument>) {}


  findAll(): Promise<Account[]> {
    return this.accountModel.find().exec();
  }
    

    getAll(req:any)
    {
      return this.accountModel.find().exec();
    }
}