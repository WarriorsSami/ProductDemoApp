import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'sort',
  pure: true
})
export class SortPipe implements PipeTransform {

  transform(products: Product[], sort: string): Product[] {
    let comparator = (sort === 'asc') 
        ? (a: Product, b: Product) => a.price - b.price 
        : (a: Product, b: Product) => b.price - a.price;
    return products.sort(comparator);
  }

}
