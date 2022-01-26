import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/product";

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.scss']
})
export class FrontendComponent implements OnInit {
  products = [] as any;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get('http://localhost:8000/api/products/frontend').subscribe(
      (products: any) => {
        this.products = products;
      }
    );
  }
}
