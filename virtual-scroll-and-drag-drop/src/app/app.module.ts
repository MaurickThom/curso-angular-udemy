import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VirtualScrollComponent } from './components/virtual-scroll/virtual-scroll.component';
import { DragAndDropComponent } from './components/drag-and-drop/drag-and-drop.component';

import {ScrollingModule} from '@angular/cdk/scrolling'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VirtualScrollComponent,
    DragAndDropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
