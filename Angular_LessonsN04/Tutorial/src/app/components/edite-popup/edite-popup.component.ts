import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DialogModule} from "primeng/dialog";
import {CommonModule} from "@angular/common";
import {Product} from "../../../types";
import {ButtonModule} from "primeng/button";
import {FormsModule} from "@angular/forms";
import {RatingModule} from "primeng/rating";

@Component({
  selector: 'app-edite-popup',
  standalone: true,
  imports: [DialogModule, CommonModule, FormsModule, RatingModule, ButtonModule],
  templateUrl: './edite-popup.component.html',
  styleUrl: './edite-popup.component.scss'
})
export class EditePopupComponent {
  @Input() display: boolean = false;
  @Output() displayChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() header!: string;

  @Input() product: Product = {
    name: '',
    price: '',
    image: '',
    rating: 0,
  };
  @Output() confirm = new EventEmitter<Product>();

  onConfirm() {
    this.confirm.emit(this.product);
    this.display = false;
    this.displayChange.emit(this.display);
  }

  onCancel() {
    this.display = false;
    this.displayChange.emit(this.display);
  }

}
