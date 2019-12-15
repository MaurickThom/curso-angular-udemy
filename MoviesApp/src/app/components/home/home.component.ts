import { Component, OnInit } from '@angular/core';
import { ApiMovieDBService } from 'src/app/services/api-movie-db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  polpularMovies:any[] = []
  popularMoviesForKids:any[] = []
  cinemaBillboard:any[] = []
  titlePopularMovies = 'Popular Movies'
  titlePopularMoviesForKids = 'Popular Movies For Kids'
  titleCinemaBillboard = 'Cinema Billboard'

  constructor(
    public api:ApiMovieDBService
  ){
    let desde = new Date()
    let hasta = new Date()
    desde.setDate(desde.getDate()-5)
    hasta.setDate(hasta.getDate()+7)
    let desdeStr = `${desde.getFullYear()}-${desde.getMonth()+1}-${desde.getDate()}`
    let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth()+1}-${hasta.getDate()}`
    this.api.popularMoviesForKids().subscribe((data:any)=>{
      this.popularMoviesForKids = data.results.slice(0,6)
    })
    this.api.cinemaBillboard(desdeStr,hastaStr).subscribe((data:any)=>{
      this.cinemaBillboard = data.results.slice(0,6)
    })
    this.api.getTheMostPopularMovies().subscribe((data:any)=>{
      this.polpularMovies = data.results.slice(0,6)
    })
  }

  ngOnInit() {
  }
  loadingData(){
    return  this.cinemaBillboard.length &&
            this.polpularMovies.length  &&
            this.popularMoviesForKids.length
  }
}
