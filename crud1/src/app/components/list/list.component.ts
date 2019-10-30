import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input('listUsers') listUsers;
  @Output() userSelected = new EventEmitter<Employee>()
  constructor(
  ) { }

  ngOnInit() {
    console.log(this.listUsers);
  }
  selectedEmployee: Employee = {id:0, name: '', country: ''};

  openForEdit(employee: Employee): void 
  {
    this.selectedEmployee = employee;
    this.userSelected.emit(employee)
  }
}
