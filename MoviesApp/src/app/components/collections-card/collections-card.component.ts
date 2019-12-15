import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collections-card',
  templateUrl: './collections-card.component.html',
  styleUrls: ['./collections-card.component.scss']
})
export class CollectionsCardComponent implements OnInit {

  @Input('movies') movies:any[];
  @Input('titleGallery') titleGallery:string
  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }
  viewMovie(movie:any){
    // console.log(movie);
    this.router.navigateByUrl(`/movie/${movie.id}`)
  }
}
