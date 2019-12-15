import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ApiMovieDBService } from 'src/app/services/api-movie-db.service';
import { from, fromEvent } from 'rxjs';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit,AfterViewInit {
    @ViewChild('input',{
    static:false
  }) input: ElementRef;
  movies:any[] = []
  constructor(
    private api:ApiMovieDBService
  ) { }

  ngOnInit() {

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
          return this.api.searchMovie(value.trim()).subscribe((data:any)=>{
            this.movies = data.results
          })
        this.movies = []
      })

  }

}
