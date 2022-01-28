import { Component, OnInit } from '@angular/core';
import {Product} from "../models/product";
import {HttpClient, HttpParams} from "@angular/common/http";
import { Filter } from '../models/filter';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.scss']
})
export class BackendComponent implements OnInit {
  products = [] as any;
  filter = {
    s: '',
    sort: ''
  };

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.load(this.filter);
  }

  load(filter: Filter): void {
    this.filter = filter;
    let params = new HttpParams();

    if (filter.s) {
      params = params.set('s', filter.s);
    }

    if (filter.sort) {
      params = params.set('sort', filter.sort);
    }

    this.httpClient.get('http://localhost:8000/api/products/backend', {
      params
    }).subscribe(
      (response: any) => {
        this.products = response.data;
      }
    );
  }

  setFilters(filter: Filter): void {
    this.load(filter);
  }
}
