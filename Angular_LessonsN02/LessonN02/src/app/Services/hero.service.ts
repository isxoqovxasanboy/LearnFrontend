import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';


import { MessageService } from './message.service';
import {Hero} from "../Models/hero";
import {HEROES} from "../SeedData/mock-heroes";

@Injectable({ providedIn: 'root' })
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.addMessage('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.addMessage(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
