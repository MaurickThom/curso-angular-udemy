import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit ,OnChanges {
  title = 'ciclo-vida-component';
  val:number = 0
  constructor(){
    console.log('En construcción');
    this.title= 'asdas'
  }
  ngOnInit(): void {
    console.log('construido')
  }
  ngOnChanges(){
    console.log('cambios')
  }
  changes($event){
    this.val = $event
  }
  add = ()=>{
    this.val ++
  }
  
}
