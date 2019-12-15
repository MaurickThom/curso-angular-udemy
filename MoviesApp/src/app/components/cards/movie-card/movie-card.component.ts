import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input('movie') movie:any
  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }
  selectedCard(id:string){
    this.router.navigateByUrl('/movie/'+id)
  }

}
