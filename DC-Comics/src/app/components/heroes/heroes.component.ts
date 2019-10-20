import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';
import { IHeroe } from 'src/app/models/IHero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  private arrHeroes : IHeroe[] = []
  constructor(
    private heroesApi:HeroesService
  ) { }

  ngOnInit() {
    this.heroesApi.getHeroes().subscribe(observer=>
      this.arrHeroes = observer
    )
  }
  
}
