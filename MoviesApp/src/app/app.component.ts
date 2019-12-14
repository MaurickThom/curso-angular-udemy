import { Component } from '@angular/core';
import { ApiMovieDBService } from './services/api-movie-db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MoviesApp';
  constructor(
    public api:ApiMovieDBService
  ){
    this.api.getTheMostPopularMovies().subscribe(data=>console.log(data))
  }
}
