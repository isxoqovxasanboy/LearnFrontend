import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/Configurations/app.config';
import { AppComponent } from './app/app.component';
// import {enableDebugTools} from "@angular/platform-browser";
// import {ApplicationRef} from "@angular/core";

bootstrapApplication(AppComponent,appConfig)
  .catch((err) => console.error(err));
