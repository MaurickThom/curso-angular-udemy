import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesComponent } from './components/routes/routes.component';
import { ChangesComponent } from './components/changes/changes.component';


const routes: Routes = [
  {
    path:'route',
    component:RoutesComponent
  },{
    path:'changes',
    component:ChangesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
