import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'
import { HttpClient,JsonpClientBackend,JsonpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiMovieDBService {
  private API_KEY:string = '9df68693d8312376ef0de9f8f352a9fb'
  private URL_MOVIE_DB:string = 'https://api.themoviedb.org/3'
  constructor(
    private api:HttpClient,
    private jsonp:JsonpClientBackend
  ) {
  }
  getTheMostPopularMovies(){
    const URL = `${this.URL_MOVIE_DB}/discover/movie?sort_by=popularity.desc&api_key=${this.API_KEY}&language=es`
    // const URL = `${this.URL_MOVIE_DB}/discover/movie?sort_by=popularity.desc&api_key=${this.API_KEY}&language=es&callback=JSONp_CALLBACK`
    return this.api.jsonp(URL,'callback')

  }
}
