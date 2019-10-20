import { Component, OnInit,Input } from '@angular/core';
import { IHeroe } from 'src/app/models/IHero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Input('hero') hero:IHeroe
  @Input('index') index:string | number
  constructor() { }

  ngOnInit() {
  }

}
