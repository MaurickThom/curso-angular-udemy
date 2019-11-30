import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { IUser } from 'src/app/models/IUser.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:IUser
  _formGroup:FormGroup
  constructor(
    private _builder:FormBuilder,
    private apiAuth:AuthService
  ) {
    this.user = {}
    this._formGroup = this._builder.group(
      {
        email:['',
        Validators.compose(
          [
            Validators.required,
            Validators.email,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
          ]
        )
      ],
        password:['',Validators.compose([Validators.required,Validators.minLength(6)])]
      }
    )
  }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
    const user= {...form.value}
    this.apiAuth.logIn(user).subscribe(data=>{
      console.log(data);
    },err=>{
      console.log(err.error.error.message);
    })
  }

}
