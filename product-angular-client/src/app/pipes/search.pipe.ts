import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'search',
  pure: true
})
export class SearchPipe implements PipeTransform {

  transform(products: Product[], s: string): Product[] {
    return products.filter(p => 
      p.title.toLowerCase().indexOf(s.toLowerCase()) >= 0 || 
      p.description.toLowerCase().indexOf(s.toLowerCase()) >= 0);
  }
}
