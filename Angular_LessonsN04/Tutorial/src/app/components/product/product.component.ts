import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Product} from "../../../types";
import {RatingModule} from "primeng/rating";
import {FormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {ConfirmationService} from "primeng/api";
import {ConfirmPopupModule} from "primeng/confirmpopup";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RatingModule, FormsModule, NgOptimizedImage, ButtonModule, ConfirmPopupModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  providers: [ConfirmationService]
})
export class ProductComponent {
  constructor(confirmationService: ConfirmationService) {
    this.confirmationService = confirmationService;
  }

  private confirmationService: ConfirmationService;
  @Input() product!: Product;
  @Output() edite: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() delete: EventEmitter<Product> = new EventEmitter<Product>();
  @ViewChild('deleteButton') deleteButton: any;


  confirmDelete(product: Product) {
    this.confirmationService.confirm({
      target: this.deleteButton.nativeElement,
      message: 'Are you sure that you want to delete this product?',
      header: 'Delete Product',
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass: 'p-button-danger',
      rejectButtonStyleClass: 'p-button-success',
      accept: () => {
        this.deleteProduct(product);
      },
      reject: () => {
          console.log('Rejected');
      }
    });
  }

  editeProduct() {
    this.edite.emit(this.product);
  }

  deleteProduct(product: Product) {
    this.delete.emit(product);
  }
}
