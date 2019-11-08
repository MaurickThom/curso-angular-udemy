import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit ,OnChanges,DoCheck{
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
  ngOnDestroy(): void {
    console.log('Componente en destruccion app.component.ts');
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('doCheck')
  }
  
}
