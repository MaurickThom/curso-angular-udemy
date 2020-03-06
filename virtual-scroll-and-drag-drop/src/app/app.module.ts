import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VirtualScrollComponent } from './components/virtual-scroll/virtual-scroll.component';
import { DragAndDropComponent } from './components/drag-and-drop/drag-and-drop.component';

import {ScrollingModule} from '@angular/cdk/scrolling'
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CountriesComponent } from './components/countries/countries.component'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VirtualScrollComponent,
    DragAndDropComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule,
    DragDropModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
