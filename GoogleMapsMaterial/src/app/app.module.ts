import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { MapaComponent } from './components/mapa/mapa.component';

import {AgmCoreModule} from '@agm/core';
import { DialogComponent } from './components/dialog/dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    AgmCoreModule.forRoot({ // hola , si quieres puedes usar esta API_KEY pero por las huevas es , ya que se necesita habilitar una cuenta de
                            // facturación y ta bien webon , estos proyectos son solo pruebas xd . El tráfico que genero al usar las APIs de Google
                            // son casi nulas casi nada . Asi que me la pelas Google 7u7
      apiKey:'AIzaSyB0WrBOLAZ2PDdoqkGveIOVQU0QvXDHm7U'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[DialogComponent]
})
export class AppModule { }
