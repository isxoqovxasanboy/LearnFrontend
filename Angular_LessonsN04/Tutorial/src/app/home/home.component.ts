import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductsService} from "../services/product.service";
import {Product} from "../../types";
import {CommonModule} from "@angular/common";
import {ProductComponent} from "../components/product/product.component";
import {PaginatorModule, PaginatorState} from 'primeng/paginator';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PaginatorModule,
    ProductComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

  constructor(private productsService: ProductsService) {

  }

  products: Product[] = [];
  totalRecords: number = 0;
  rows : number = 12;

  onOutputProduct(product: Product) {
    console.log(product, 'Output product');
    this.products.push(product);
  }

  onPageChange(event:  PaginatorState) {
    console.log(event, 'Page change');
    this.fetchProducts(event.page, event.rows);
  }

  fetchProducts(page: number = 0, perPage: number = 12 ) {
    this.productsService.getProducts('http://localhost:3000/clothes', {page: page, perPage: perPage})
      .subscribe((product) => {
        this.products = product.items;
        this.totalRecords = product.total;
      })
  }

  ngOnInit(): void {
    this.fetchProducts(0, this.rows);
  }

}
