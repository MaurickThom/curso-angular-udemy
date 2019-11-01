import { Component, OnInit, Input } from '@angular/core';
import { ArrEmployeeService } from 'src/app/services/arr-employee.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {

  @Input('selectedEmployee') selectedEmployee;
  constructor(
    private api:ArrEmployeeService
  ) { }

  ngOnInit() {
  }
  addOrEdit(){
    // console.log(this.selectedEmployee)

      this.api.createUser(this.selectedEmployee.name,this.selectedEmployee.country).subscribe(observer=>{
        console.log('correcto')
      },err=>{
        // console.log(err)
        console.log('err')
      })

  }
  delete(){

  }
}
