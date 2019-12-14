import { Injectable } from '@angular/core';
import {map, debounceTime, distinctUntilChanged, filter} from 'rxjs/operators'
import { HttpClient,JsonpClientBackend,JsonpInterceptor } from '@angular/common/http';

// https://developers.themoviedb.org/3 --> DOCUMENTATION API
@Injectable({
  providedIn: 'root'
})
export class ApiMovieDBService {
  private API_KEY:string = '9df68693d8312376ef0de9f8f352a9fb'
  private URL_MOVIE_DB:string = 'http://api.themoviedb.org/3'
  constructor(
    private api:HttpClient,
    private jsonp:JsonpClientBackend
  ) {
  }
  getTheMostPopularMovies(){
    const URL = `${this.URL_MOVIE_DB}/discover/movie?sort_by=popularity.desc&api_key=${this.API_KEY}&language=es`
    // const URL = `${this.URL_MOVIE_DB}/discover/movie?sort_by=popularity.desc&api_key=${this.API_KEY}&language=es&callback=JSONP_CALLBACK`
    return this.api.jsonp(URL,'callback')
  }
  searchMovie(title:string,page:number=1){
    const URL = `${this.URL_MOVIE_DB}/search/movie?api_key=${this.API_KEY}&language=es&query=${title}&page=${page}&sort_by=popularity.desc`
    return this.api.jsonp(URL,'callback').pipe(
      filter(Boolean),
      debounceTime(1000)
    )
  }
  getMovieById(movieID:string){
    const URL = `${this.URL_MOVIE_DB}/movie/${movieID}?api_key=${this.API_KEY}&language=es`
    return this.api.jsonp(URL,'callback')
  }
  cinemaBillboard(){
    const URL = `${this.URL_MOVIE_DB}/movie/now_playing?api_key=${this.API_KEY}&language=es&region=ES`
    return this.api.jsonp(URL,'callback')
  }
  popularMoviesForKids(){
    const URL = `${this.URL_MOVIE_DB}/discover/movie?sort_by=popularity.desc&api_key=${this.API_KEY}` +
            `&language=es&region=ES&certification_country=ES` +
            `&certification=APTA`;
    return this.api.jsonp(URL,'callback')
  }
}
