import { Component, OnInit } from '@angular/core';
import { ApiHeroService } from 'src/app/services/api-hero.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  arrHeroes = []
  empty = false
  loading = true
  constructor(
    private api:ApiHeroService
  ) { }

  ngOnInit() {
    this.api.getAllHeroes().subscribe(data=>{
      this.loading = false
      if(!data.length)
        return this.empty = true
      this.arrHeroes = data
    })
  }
  deleteHero(id:string,index:number){
    Swal.fire({
      title: '¿Estas seguro de eliminar?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'si, quiero eliminarlo!',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title:'Espere',
          text:'eliminando información',
          icon:'info',
          allowOutsideClick:false
        })
        Swal.showLoading()
        this.api.deleteHero(id).subscribe(_=>{
          this.arrHeroes.splice(index,1)
          this.empty = true
          Swal.fire({
            title:'Elimnado',
            text:'Se elimino correctamente',
            icon:'success'
          })
        })
      }
    })


  }
}
