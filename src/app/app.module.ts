import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CharacterActionsComponent, GotCharacterComponent} from "./got-character.component";
import {CharacterComponent} from "./character.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GotCharacterComponent,
    CharacterActionsComponent,
    CharacterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
