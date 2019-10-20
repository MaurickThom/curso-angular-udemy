import { Component, OnInit,Input } from '@angular/core';
import { IHeroe } from 'src/app/models/IHero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Input('hero') hero:IHeroe
  @Input('i') i:string | number
  constructor(private router:Router) { }

  ngOnInit() {
  }
  selectedCard(id:any){
    this.router.navigate(['/hero',id])
  }
}
