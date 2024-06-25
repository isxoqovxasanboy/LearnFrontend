import {Component, ViewChild} from '@angular/core';
import {ProductsService} from "../services/product.service";
import {Product, Products} from "../../types";
import {CommonModule} from "@angular/common";
import {ProductComponent} from "../components/product/product.component";
import {Paginator, PaginatorModule, PaginatorState} from 'primeng/paginator';
import {EditePopupComponent} from "../components/edite-popup/edite-popup.component";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PaginatorModule,
    ProductComponent,
    CommonModule,
    EditePopupComponent,
    ButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

  constructor(productsService: ProductsService) {
    this.productsService = productsService;

  }

  private productsService: ProductsService;
  products: Product[] = [];
  displayEditPopup: boolean = false;
  displayAddPopup: boolean = false;
  totalRecords: number = 0;
  rows: number = 12;
  @ViewChild('paginator') paginator: Paginator | undefined;

  selectedProduct: Product = {
    id: 0,
    name: '',
    price: '',
    image: '',
    rating: 0,
  };


  onProductOutput(product: Product) {
    console.log(product, 'Output product');
    this.products.push(product);
  }

  onPageChange(event: PaginatorState) {
    console.log(event, 'Page change');
    this.fetchProducts(event.page, event.rows);
  }

  fetchProducts(page: number = 0, perPage: number = 12) {
    this.productsService.getProducts('http://localhost:3000/clothes', {page: page, perPage: perPage})
      .subscribe({
        next: (data: Products) => {
          this.products = data.items;
          this.totalRecords = data.total;
        },
        error: (error) => {
          console.log(error);
        },
      })
  }

  editProduct(product: Product, id: number) {
    this.productsService.editProduct(`http://localhost:3000/clothes/${id}`, product)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.fetchProducts(0, this.rows);
        },
        error: (error) => {
          console.log(error);
        }
      })
  }

  addProduct(product: Product) {
    this.productsService.addProduct('http://localhost:3000/clothes', product)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.fetchProducts(0, this.rows);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  resetPaginator() {
    this.paginator?.changePage(0);
  }
  deleteProduct(id: number) {
    this.productsService.deleteProduct(`http://localhost:3000/clothes/${id}`)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.fetchProducts(0, this.rows);
          this.resetPaginator();
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  onConfirmAdd($event: Product) {
      this.addProduct($event);
      this.displayAddPopup = false;

  }
  onConfirmEdite($event: Product) {
    if (!this.selectedProduct.id) {
      return;
    }
      this.editProduct(this.selectedProduct, this.selectedProduct.id);
      this.displayEditPopup = false;
  }

  toggleEditPopup(product: Product) {
      this.selectedProduct = product;
      this.displayEditPopup = true;
  }

  toggleAddPopup() {
      this.displayAddPopup = true;
  }

  ngOnInit(): void {
    this.fetchProducts(0, this.rows);
  }

  toggleDeletePopup($event: Product) {
      if (!$event.id) {
          return;
      }
      this.deleteProduct($event.id);
  }
}
