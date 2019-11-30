import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: 'home'    , component: HomeComponent ,
canActivate:[AuthGuard]},
  { path: 'register', component: RegisterComponent },
  { path: 'login'   , component: LoginComponent },
  {
    path:"",
    pathMatch:"full",
    redirectTo:"register"
  },
  {
    path:"**",
    pathMatch:"full",
    redirectTo:"register"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
