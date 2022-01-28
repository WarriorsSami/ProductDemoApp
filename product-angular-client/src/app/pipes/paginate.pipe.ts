import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'paginate',
  pure: true
})
export class PaginatePipe implements PipeTransform {
  public static perPage = 8;

  transform(products: Product[], page: number): Product[] {
    return products.slice(0, page * PaginatePipe.perPage);
  }

}
