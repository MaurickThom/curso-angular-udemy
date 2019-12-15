import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(movie:any,backdrop:boolean=false): any {
    const img_base_url = 'https://image.tmdb.org/t/p/w342';
    if(!backdrop && !movie.poster_path && !movie.backdrop_path)
      return 'assets/images/noImage.svg';
    if(!backdrop && !movie.poster_path)
      return img_base_url + movie.backdrop_path
    if(backdrop && !movie.backdrop_path && !movie.poster_path)
      return 'assets/images/noImage.svg';
    if(backdrop && !movie.backdrop_path)
      return img_base_url + movie.poster_path
    return !backdrop ? img_base_url + movie.poster_path : img_base_url + movie.backdrop_path
  }

}
