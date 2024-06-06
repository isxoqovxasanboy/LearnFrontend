import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CalculateService} from "./Services/calculate.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculator';
  public firstNumber: number = 0;
  public secondNumber: number = 0;

  calculateService : CalculateService = new CalculateService();


}
