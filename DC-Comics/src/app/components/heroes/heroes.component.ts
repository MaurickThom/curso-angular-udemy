import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';
import { IHeroe } from 'src/app/models/IHero';
import { Observable,interval , from, pipe, of} from 'rxjs';
import {tap, map,zip} from 'rxjs/operators'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  private arrHeroes : IHeroe[] = []
  private arrHeroes$ : Observable<IHeroe[]>
  constructor(
    private heroesApi:HeroesService,
    private router:Router
  ) { }

  ngOnInit() {
    this.arrHeroes$ = this.heroesApi.getHeroes()
    
    this.heroesApi.getHeroes().subscribe(observer=>
      this.arrHeroes = observer
      )
    }
  showHeroes($event){
    this.router.navigate(['/hero',$event])
    console.log($event)
  }
  
}
