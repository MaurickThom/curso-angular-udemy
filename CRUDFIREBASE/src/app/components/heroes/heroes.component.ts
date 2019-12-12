import { Component, OnInit } from '@angular/core';
import { ApiHeroService } from 'src/app/services/api-hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {


  constructor(
    private api:ApiHeroService
  ) { }

  ngOnInit() {
    this.api.getAllHeroes().subscribe(data=>{
      console.log(data);
    })
  }

}
