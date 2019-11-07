import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { ChildrenComponent } from './components/children/children.component';
import { NewComponent } from './components/new/new.component';
import { EditComponent } from './components/edit/edit.component';
import { DetailComponent } from './components/detail/detail.component';


const routes: Routes = [
  {
    path:'',
    component:BodyComponent
  },{
    path:"",
    pathMatch:"full",
    redirectTo:"/"
  },{
    path:"children",
    component:ChildrenComponent,
    children:[
      {
        path:"new",
        component:NewComponent
      },
      {
        path:"edit",
        component:EditComponent
      },
      {
        path:"detail",
        component:DetailComponent
      }
    ]
  },{
    path:"**",
    pathMatch:"full",
    redirectTo:"/"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
