import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/models/IUser.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:IUser
  _formGroup:FormGroup
  constructor(
    private _builder:FormBuilder
  ) {
    this.user = {}
    this._formGroup = this._builder.group(
      {
        user:['',Validators.required],
        password:['',Validators.compose([Validators.required,Validators.minLength(6)])]
      }
    )
  }

  ngOnInit() {
  }
  onSubmit(values){

  }

}
