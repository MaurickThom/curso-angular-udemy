import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/IUser.interface';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user:IUser
  _formGroup: FormGroup
  constructor(
    private _builder:FormBuilder,
    private apiAuth:AuthService,
    private router:Router
  ) {
    this.user = {}
    this._formGroup = this._builder.group({
      name:['',Validators.required],
      user:['',Validators.required],
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
    })
  }

  ngOnInit() {
  }
  // cuando es formulario por template el atributo debe ser form:NgForm
  onSubmit(form:NgForm){
    // console.log(form);
    // console.log(form.value);
    const user:IUser = {...form.value}
    Swal.fire({
      allowOutsideClick:false,
      icon:'info',
      text:'Espere por favor ...'
    });
    Swal.showLoading()
    this.apiAuth.register(user).subscribe(data=>{
      console.log(data)
      Swal.close()
      this.router.navigateByUrl('/home')
    },err=>{
      console.log(err.error.error.message)
      Swal.fire({
        icon:'error',
        title:'Error al autenticar',
        text:`${err.error.error.message}`
      });
    })
  }

}
