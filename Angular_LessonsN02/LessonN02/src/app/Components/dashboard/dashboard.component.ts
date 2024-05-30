import { Component, OnInit } from '@angular/core';
import {Hero} from "../../Models/hero";
import {HeroService} from "../../Services/hero.service";
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";
import {HeroSearchComponent} from "../hero-search/hero-search.component";

@Component({
  selector: 'app-dashboard',
  standalone : true,
  imports: [
    RouterLink,
    NgForOf,
    HeroSearchComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ],
  providers: [HeroService]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
