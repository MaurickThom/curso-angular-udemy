import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MoviePresentationComponent } from './components/presentation/movie-presentation/movie-presentation.component';


const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  { path: 'search/:text/:page', component: SearchComponent },
  {path: 'search', component: SearchComponent},
  {
    path:'movie/:movieID',
    component:MoviePresentationComponent
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
