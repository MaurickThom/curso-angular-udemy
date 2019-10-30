import { Component, OnInit } from '@angular/core';
import { Employee } from './models/employee';
import { ArrEmployeeService } from './services/arr-employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  private listUsers:Employee[] = []
  private loading = true
  constructor(
    private apiUsers:ArrEmployeeService
  ){
  }
  ngOnInit(){
    this.apiUsers.getUsers().subscribe(data=>{
      this.listUsers = data
      this.loading = false
    })
  }
}
