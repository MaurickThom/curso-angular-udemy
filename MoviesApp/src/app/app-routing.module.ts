import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { SearchByTitleComponent } from './components/search-by-title/search-by-title.component';
import { SearchByTitleAndPageComponent } from './components/search-by-title-and-page/search-by-title-and-page.component';
import { MoviePresentationComponent } from './components/presentation/movie-presentation/movie-presentation.component';


const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'search',
    component:SearchComponent,
    children:[
      {
        path:':title',
        component:SearchByTitleComponent,
        children:[
          {
            path:':page',
            component:SearchByTitleAndPageComponent
          }
        ]
      }
    ]
  },
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
