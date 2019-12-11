import { Component, OnInit } from '@angular/core';
import { FormBuilder,
    Validators,
    NgForm,
    FormGroup,
    AbstractControl,
    FormControl ,
    FormArray,
    ValidatorFn} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { map } from 'rxjs/operators';
FormGroup
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  title="Data"
  _formGroup:FormGroup
  constructor(
    private _builder:FormBuilder,
    private api:ApiService
  ) {
    this._formGroup = this._builder.group({
      email:['',
        Validators.compose(
          [ Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$') ]
        ),
        this.validateEmailNotTaken.bind(this)
      ],
      password:['',[Validators.required,Validators.minLength(5)]],
      password2:[''],
      username:['',[Validators.required,Validators.minLength(4),this.noLucia],this.validateUserNameNotTaken.bind(this)],
      nombrecompleto: this._builder.group({
        nombre:['',[Validators.required,Validators.minLength(5),this.noLucia]],
        apellido:['',[Validators.required,Validators.minLength(5)]]
      }),
      pasatiempos: this._builder.array([
        this._builder.control('',Validators.required)
      ])
    })

    /**
     * para cargar el objeto obtenemos el id de un usuario mediante la url
     * y hacemos el request al servicio y lo almacenamos en un objeto
     *
     *
     * this._formGroup.setValue(user) // ojo que la estructura del objeto debe ser igual al builder
     */
    this._formGroup.controls['password2'].setValidators([Validators.required,this.noIgual.bind(this._formGroup)])
  }

  ngOnInit() {
    this._formGroup.valueChanges.subscribe(data=>console.log(data))
    this._formGroup.controls['username'].valueChanges.subscribe(data=>console.log(data))
    this._formGroup.controls['username'].statusChanges.subscribe(data=>console.log(data))
  }
  submit(form:NgForm){
    const saveform = {...form}
    console.log(saveform);
    // this._formGroup.reset()
  }
  agregarPasatiempos(){
    (<FormArray>this._formGroup.controls['pasatiempos']).push(
      new FormControl('',Validators.required)
    )
  }
  noLucia(control: AbstractControl):{[s:string]:boolean}{
      return control.value==='lucia' ? {'nolucia': true} : null;
  }
  noIgual(control: AbstractControl):{[s:string]:boolean}{
    // console.log(this,'asdasd');
    let form:any = this
    return control.value !== form.controls['password'].value ?
      { noigual:true }: null
  }
  validateEmailNotTaken(control: AbstractControl) {
    return this.api.checkEmailNotTaken(control.value).pipe(
      map(res => {
        return res ? null : { emailTaken: true };
      }
    ))
  }
  validateUserNameNotTaken(control: AbstractControl) {
    return this.api.checkUserNameNoyTaken(control.value).pipe(
      map(res => {
        return res ? null : { usernameTaken: true };
      }
    ))
  }
}
