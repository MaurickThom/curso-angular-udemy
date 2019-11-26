import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path:'home',
    component:BodyComponent
  },
  {
    path:'precios',
    component:PreciosComponent
  },
  {
    path:'protegida',
    component:ProtegidaComponent,
    canActivate:[AuthGuard]
  },

  {
    path:'callback',
    component:CallbackComponent
  },
  {
    path:"",
    pathMatch:"full",
    redirectTo:"home"
  },
  {
    path:"**",
    pathMatch:"full",
    redirectTo:"home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash:true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
