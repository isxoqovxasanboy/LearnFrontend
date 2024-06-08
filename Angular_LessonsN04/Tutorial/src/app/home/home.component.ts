import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../services/product.service";
import {Product} from "../../types";
import {CommonModule} from "@angular/common";
import {ProductComponent} from "../components/product/product.component";
import { PaginatorModule } from 'primeng/paginator';

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

export class HomeComponent implements OnInit {

  constructor(private productsService: ProductsService) {

  }

  products: Product[] = [];

  onOutputProduct(product: Product) {
      console.log(product , 'Output product');
      this.products.push(product);
  }


  ngOnInit(): void {
    this.productsService.getProducts('https://localhost:7267/api/product', {page: 1, perPage: 5})
      .subscribe((products) => {
        this.products = products.items ;
        console.log(this.products);
      });
    console.log(this.products);

  }

}
