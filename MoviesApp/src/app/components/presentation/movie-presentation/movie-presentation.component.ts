import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiMovieDBService } from 'src/app/services/api-movie-db.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-presentation',
  templateUrl: './movie-presentation.component.html',
  styleUrls: ['./movie-presentation.component.scss']
})
export class MoviePresentationComponent implements OnInit {

  movie:any
  constructor(
    private activatedRoute:ActivatedRoute,
    private route:Router,
    private api:ApiMovieDBService,
    private location:Location
  ) {
  }

  ngOnInit() {
    const movieID = this.activatedRoute.snapshot.paramMap.get('movieID')
    if(!movieID)
      return this.route.navigateByUrl('/')
    this.api.getMovieById(movieID).subscribe(movie=>{
      this.movie = movie
      console.log(movie);
    },err=>{
      return this.route.navigateByUrl('/')
    })
  }

}
