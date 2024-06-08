import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../services/product.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private productsService: ProductsService) {

  }

  ngOnInit(): void {
    this.productsService.getProducts('https://localhost:7267/api/product', {page: 1, perPage: 5})
      .subscribe((products) => {
        console.log(products);
      });
  }
}
