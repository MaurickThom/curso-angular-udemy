import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HeadComponent } from './components/head/head.component';
import { HomeComponent } from './components/home/home.component';
import { YoutubeService } from './services/youtube.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeadComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
