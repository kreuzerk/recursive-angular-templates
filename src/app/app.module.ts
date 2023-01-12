import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CharacterActionsComponent, GotCharacterComponent} from "./got-character.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GotCharacterComponent,
    CharacterActionsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
