import {Component} from '@angular/core';
import {MessageService} from "../../Services/message.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
    selector: 'app-message',
    standalone: true,
  imports: [
    NgIf,
    NgForOf,
  ],
    templateUrl: './messages.component.html',
    styleUrl: './messages.component.css'
})

export class MessagesComponent {
    constructor(public messageService: MessageService) {
    }
}

