import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ng-if-ng-for';
  isActive:boolean = true
  heroes:string[] = ['Spiderman','Venom','Dr Octopus','Wolverine']
  ngOnInit(): void {
    
  }

}
