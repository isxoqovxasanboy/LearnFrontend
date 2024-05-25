import {Injectable} from "@angular/core";
import {Hero} from "../Models/hero";
import {HEROES} from "../SeedData/mock-heroes";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  constructor(private messageService: MessageService) {
  }

  public getHeroes(): Observable<Hero[]> {
    let heroes: Observable<Hero[]>;
    heroes = of(HEROES);
    this.messageService.addMessage("HeroService: fetched heroes");
    return heroes;
  }
}
