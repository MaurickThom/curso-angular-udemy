import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { IHeroe } from 'src/app/models/IHero';

@Component({
  selector: 'app-found',
  templateUrl: './found.component.html',
  styleUrls: ['./found.component.scss']
})
export class FoundComponent implements OnInit {
  private arrHeroes : IHeroe[] = []
  private dataError:{msg:string}
  constructor(
    private activatedRoute:ActivatedRoute,
    private apiHero:HeroesService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(observer=>{
      const {name} = observer
      this.apiHero.getHeroesByName(name).subscribe(data=>{
        this.arrHeroes = data
      },err=>{
        this.dataError = err 
      })
    })
  }

}
