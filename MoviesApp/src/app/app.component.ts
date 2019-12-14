import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ApiMovieDBService } from './services/api-movie-db.service';
import { fromEvent } from 'rxjs';
import { debounceTime, filter, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements AfterViewInit {
  @ViewChild('input',{
    static:false
  }) input: ElementRef;
  title = 'MoviesApp';
  constructor(
    public api:ApiMovieDBService
  ){
    this.api.popularMoviesForKids().subscribe(data=>console.log(data))

  }
  ngAfterViewInit() {
    fromEvent(this.input.nativeElement,'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((data:any)=>{
        const value = data.target.value
        if(value.trim())
          this.api.searchMovie(value.trim()).subscribe((data:any)=>{
            const id = data.results[0].id
            console.log(data);
            this.api.getMovieById(id).subscribe(movie=>console.log(movie))
          })
      })

  }
}
