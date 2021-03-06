import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/product";
import { PaginatePipe } from '../pipes/paginate.pipe';
import { Filter } from '../models/filter';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.scss']
})
export class FrontendComponent implements OnInit {
  products = [] as any;
  filter = {
    pattern: '',
    sort: 'asc',
    page: 1
  };

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get('http://localhost:8000/api/products/frontend').subscribe(
      (products: any) => {
        this.products = products;
      }
    );
  }

  setFilters(filter: Filter): void {
    this.filter = filter;
  }

  lastPage(products: Product[]): number {
    return Math.ceil(products.length / PaginatePipe.perPage);
  }
}
