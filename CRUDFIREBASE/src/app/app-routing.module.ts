import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { NewHeroComponent } from './components/new-hero/new-hero.component';
import { EditHeroComponent } from './components/edit-hero/edit-hero.component';


const routes: Routes = [
  {
    path:"heroes",
    component:HeroesComponent
  },
  {
    path:"new-hero",
    component:NewHeroComponent,
    children:[
    ]
  },
  {
    path:"new-hero/:id",
    component:EditHeroComponent
  },
  {
    path:"",
    pathMatch:"full",
    redirectTo:"heroes"
  },
  {
    path:"**",
    pathMatch:"full",
    redirectTo:"heroes"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
