import { Component, OnInit } from '@angular/core';
import {Product} from "../models/product";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.scss']
})
export class BackendComponent implements OnInit {
  products = [] as any;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get('http://localhost:8000/api/products/backend').subscribe(
      (response: any) => {
        this.products = response.data;
      }
    );
  }

  search(s: string): void {

  }
}
