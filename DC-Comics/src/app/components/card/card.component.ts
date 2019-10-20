import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { IHeroe } from 'src/app/models/IHero';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  private dataSuccess:IHeroe
  private dataError:{msg:string}
  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private apiHero:HeroesService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(observer=>{
      const {id} = observer
      this.apiHero.getHeroById(id).subscribe((observer:IHeroe)=>{
        this.dataSuccess = observer
      },
      (err:{msg:string})=>{
        this.dataError = err
      })
    })
  }

}
