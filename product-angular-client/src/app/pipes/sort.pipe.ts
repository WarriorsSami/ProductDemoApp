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
        : (sort === 'desc') 
            ? (a: Product, b: Product) => b.price - a.price 
            : (_a: Product, _b: Product) => 0;
    return products.sort(comparator);
  }

}
