import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Filter } from '../models/filter';
import {Product} from "../models/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input('products') products: Product[] = [];
  @Output('setFilters') setFilters = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  search(s: string): void {
    this.setFilters.emit({
      s
    } as Filter);
  }
}
