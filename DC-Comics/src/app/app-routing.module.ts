import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { CardComponent } from './components/card/card.component';
import { FoundComponent } from './components/found/found.component';


const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'heroes',
    component:HeroesComponent
  },
  {
    path:'hero/:id',
    component:CardComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'search/:name',
    component:FoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
