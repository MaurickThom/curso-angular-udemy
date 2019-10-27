import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http:HttpClient
  ) { }

  getNewsReleases():Observable<any>{
    const headers = new HttpHeaders({
      Authorization:'Bearer BQA_jsSE2o4u42u7My6mvh_-0_d88qy_g93fcmXqF1Jhmb5ZOl8M5zGdi2kKu8sQDuBumfu9CBlFD6mxjwA'
    })
    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers})
    .pipe(
      map((data:any)=>data.albums.items)
    )
  }

  getArtists(artist:string):Observable<any>{
    const headers = new HttpHeaders({
      Authorization:'Bearer BQA_jsSE2o4u42u7My6mvh_-0_d88qy_g93fcmXqF1Jhmb5ZOl8M5zGdi2kKu8sQDuBumfu9CBlFD6mxjwA'
    })
    return this.http.get(`https://api.spotify.com/v1/search?q=${artist}&type=artist&limit=10`,{headers})
      .pipe(
        map((data:any)=>data.artists.items)
      )
  }
}
