import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VirtualScrollComponent } from './components/virtual-scroll/virtual-scroll.component';
import { DragAndDropComponent } from './components/drag-and-drop/drag-and-drop.component';


const routes: Routes = [
  {
    path:"virtual-scroll",
    component:VirtualScrollComponent
  },
  {
    path:"drag-and-drop",
    component:DragAndDropComponent
  },
  {
    path:"",
    pathMatch:"full",
    redirectTo:"virtual-sroll"
  },
  {
    path:"**",
    pathMatch:"full",
    redirectTo:"virtual-sroll"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
