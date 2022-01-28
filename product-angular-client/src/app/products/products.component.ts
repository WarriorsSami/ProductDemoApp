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
  @Input('lastPage') lastPage: number = 0;

  @Output('setFilters') setFilters = new EventEmitter();

  search(s: string): void {
    this.setFilters.emit({
      ...this.filter,
      pattern: s,
      page: 1
    } as Filter);
  }

  sort(sort: string): void {
    this.setFilters.emit({
      ...this.filter,
      sort,
      page: 1
    } as Filter);
  }

  loadMore(): void {
    this.setFilters.emit({
      ...this.filter,
      page: this.filter.page + 1
    } as Filter);
  }
}
