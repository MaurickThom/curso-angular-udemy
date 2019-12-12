import { Component, OnInit } from '@angular/core';
import { ApiHeroService } from 'src/app/services/api-hero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Hero } from 'src/app/models/hero.interface';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.scss']
})
export class EditHeroComponent implements OnInit {
  _formGroup:FormGroup
  hero = <any>{}
  loading = true
  constructor(
    private _formBuilder : FormBuilder,
    private api:ApiHeroService,
    private route:ActivatedRoute,
    private router: Router
  ) {
    this._formGroup = this._formBuilder.group({
      id:[{value: '', disabled: true},[]],
      name:['',[Validators.required,Validators.minLength(3)]],
      power:['']
    })
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.api.getHero(id).subscribe(data=>{
      if(Object.keys(data).length<=1){
        return this.router.navigate(['/'])
      }
      this.hero = data
      this._formGroup.reset({
        name:this.hero.name,
        id:this.hero.id,
        power:this.hero.power
      })
      this.loading = false
    },err=>{
      console.log(err);
    })

  }
  submit(form:NgForm){
    Swal.fire({
      title: '¿Estas seguro de actualizar?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'si, quiero actualizar!',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.hero = {
          ...this.hero,
          ...form.value,
          id:form.controls['id'].value
        }
        Swal.fire({
          title:'Espere',
          text:'Guardando información',
          icon:'info',
          allowOutsideClick:false
        })
        Swal.showLoading()
        this.api.updateHero(this.hero).subscribe(data=>{
          Swal.fire({
            title:this.hero.name,
            text:'Se actualizó correctamente',
            icon:'success'
          })
        })
      }
    })

  }

}
