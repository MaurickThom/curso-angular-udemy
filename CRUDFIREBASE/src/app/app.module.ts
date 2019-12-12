import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewHeroComponent } from './components/new-hero/new-hero.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { EditHeroComponent } from './components/edit-hero/edit-hero.component';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    NewHeroComponent,
    HeroesComponent,
    EditHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
