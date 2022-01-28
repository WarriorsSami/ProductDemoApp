import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/product";
import { Filter } from '../models/filter';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.scss']
})
export class FrontendComponent implements OnInit {
  products = [] as any;
  s: string = '';

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get('http://localhost:8000/api/products/frontend').subscribe(
      (products: any) => {
        this.products = products;
      }
    );
  }

  setFilters(filter: Filter): void {
    if (filter.s) {
      this.s = filter.s;
    }
  }
}
