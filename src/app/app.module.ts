import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {GotCharacterComponent} from "./got-character.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GotCharacterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
