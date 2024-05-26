import {Component, OnInit} from '@angular/core';
import {Hero} from "../../Models/hero";
import {NgForOf, NgIf, UpperCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";
import {HeroService} from "../../Services/hero.service";
import {MessageService} from "../../Services/message.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    UpperCasePipe,
    FormsModule,
    NgForOf,
    NgIf,
    HeroDetailComponent,
    RouterLink
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {

  public selectedHero?: Hero;
  public heroes: Hero[] = [];
  private heroService: HeroService;
  private messageService: MessageService;

  constructor(heroService: HeroService, messageService: MessageService) {
    this.messageService = messageService;
    this.heroService = heroService;
  }

  // onSelect(hero: Hero) {
  //   this.selectedHero = hero;
  //   this.messageService.addMessage(`HeroesComponent: Selected hero id = ${hero.id}`);
  // }

  private getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
