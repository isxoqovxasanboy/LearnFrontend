import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../../types";
import {RatingModule} from "primeng/rating";
import {FormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RatingModule, FormsModule, NgOptimizedImage],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() productOutput: EventEmitter<Product> = new EventEmitter<Product>();

  addRating(): void {
    this.productOutput.emit(this.product);
  }



}
