import { DataFactory, Seeder } from 'nestjs-seeder';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.entity';
import { Model } from 'mongoose';

export class ProductSeeder implements Seeder {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {}

  drop(): Promise<any> {
    return this.productModel.deleteMany({}) as any;
  }

  seed(): Promise<any> {
    const products = DataFactory.createForClass(Product).generate(50);

    return this.productModel.insertMany(products) as any;
  }
}
