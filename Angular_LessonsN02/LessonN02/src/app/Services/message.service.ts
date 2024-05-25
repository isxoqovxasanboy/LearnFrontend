import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  public messages: string[] = [];

  public addMessage(message: string): void {
    this.messages.push(message);
  }

  public clearMessages(): void {
    this.messages = [];
  }

  constructor() {
  }
}
