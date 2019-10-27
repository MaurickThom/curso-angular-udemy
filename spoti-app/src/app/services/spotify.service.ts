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
      Authorization:'Bearer BQDNkQA5GzvIx6hlZZWc0JqSpr8hwsafMansxLc-AFbmbCAvJFBt_d2SfWMaMezZihsni32INKtyHCzW1Es'
    })
    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers})
    .pipe(
      map((data:any)=>data.albums.items)
    )
  }

  getArtists(artist:string):Observable<any>{
    const headers = new HttpHeaders({
      Authorization:'Bearer BQDNkQA5GzvIx6hlZZWc0JqSpr8hwsafMansxLc-AFbmbCAvJFBt_d2SfWMaMezZihsni32INKtyHCzW1Es'
    })
    return this.http.get(`https://api.spotify.com/v1/search?q=${artist}&type=artist&limit=10`,{headers})
      .pipe(
        map((data:any)=>data.artists.items)
      )
  }
  getArtist(id:string):Observable<any>{
    const headers = new HttpHeaders({
      Authorization:'Bearer BQDNkQA5GzvIx6hlZZWc0JqSpr8hwsafMansxLc-AFbmbCAvJFBt_d2SfWMaMezZihsni32INKtyHCzW1Es'
    })
    return this.http.get(`https://api.spotify.com/v1/artists/${id}`,{headers})
  }
}
