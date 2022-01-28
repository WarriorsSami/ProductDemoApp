import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Filter } from '../models/filter';
import {Product} from "../models/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  @Input('products') products: Product[] = [];
  @Input('filter') filter: Filter = {} as Filter;
  @Output('setFilters') setFilters = new EventEmitter();

  search(s: string): void {
    this.setFilters.emit({
      ...this.filter,
      s
    } as Filter);
  }

  sort(sort: string): void {
    this.setFilters.emit({
      ...this.filter,
      sort
    } as Filter);
  }
}
