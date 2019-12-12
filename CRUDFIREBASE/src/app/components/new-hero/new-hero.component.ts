import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {Hero} from './../../models/hero.interface'
import { ApiHeroService } from 'src/app/services/api-hero.service';
import { map } from 'rxjs/operators'
import Swal from 'sweetalert2'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.scss']
})
export class NewHeroComponent implements OnInit {
  _formGroup:FormGroup
  hero:Hero = {
    name:'',
    id:'',
    power:'',
    status:true
  }
  constructor(
    private _formBuilder : FormBuilder,
    private api:ApiHeroService
  ) {
    this._formGroup = this._formBuilder.group({
      id:[{value: this.hero.id || '', disabled: true},[]],
      name:['',[Validators.required,Validators.minLength(3)]],
      power:['']
    })
  }

  ngOnInit() {
  }
  submit(form:NgForm){


    this.hero = {
      ...this.hero,
      ...form.value,
      id:form.controls['id'].value
    }
    // let request:Observable<any>
    Swal.fire({
      title:'Espere',
      text:'Guardando información',
      icon:'info',
      allowOutsideClick:false
    })
    Swal.showLoading()
    if(this.hero.id){
      this.api.updateHero(this.hero).subscribe(data=>{
        Swal.fire({
          title:this.hero.name,
          text:'Se actualizó correctamente',
          icon:'success'
        })
      })
      return
    }
    this.api.createHero(this.hero)
    .subscribe( data=>{
      this.hero = data
      this._formGroup.get('id').setValue(this.hero.id)
      Swal.fire({
        title:this.hero.name,
        text:'Se creo correctamente',
        icon:'success'
      })
    },
    err=>{
      console.log(err);
    })
  }
}
