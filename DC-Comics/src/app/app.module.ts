import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component'
import { HeroesService } from './services/heroes.service';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CardComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
