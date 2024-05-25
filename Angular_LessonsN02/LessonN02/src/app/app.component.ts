import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeroesComponent} from "./Components/heroes/heroes.component";
import {MessagesComponent} from "./Components/message/messages.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroesComponent, MessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Heroes Run';
}
