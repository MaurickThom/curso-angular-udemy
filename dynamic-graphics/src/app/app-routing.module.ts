import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinesComponent } from './components/lines/lines.component';
import { BarComponent } from './components/bar/bar.component';
import { DoughnutComponent } from './components/doughnut/doughnut.component';


const routes: Routes = [
  {
    path:"lines",
    component:LinesComponent
  },
  {
    path:"bar",
    component:BarComponent
  },
  {
    path:"doughnut",
    component:DoughnutComponent
  },
  {
    path:"",
    pathMatch:"full",
    redirectTo:"lines"
  },
  {
    path:"**",
    pathMatch:"full",
    redirectTo:"lines"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
