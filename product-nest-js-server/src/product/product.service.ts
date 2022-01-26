import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.entity';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {}

  find(options: any) {
    return this.productModel.find(options);
  }

  async count(options: any) {
    return await this.productModel.countDocuments(options).exec();
  }
}
