import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators'

// http://localhost:3000/api/spotify/c7a4f9096afd462990beeced334c90bc/e8dd7311ea4440e5b229a40a65546e3b
/**
 * npm run watch
 */
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http:HttpClient
  ) { }

  getNewsReleases():Observable<any>{
    const headers = new HttpHeaders({
      Authorization:'Bearer BQDY1ac2gUcNSCkyVk7N2w7gixlNTFvLwTYt47AC7WRjYCRxMcigD7b5WV-QqN91JTxurmExft8qo4c6fBs'
    })
    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers})
    .pipe(
      map((data:any)=>data.albums.items)
    )
  }

  getArtists(artist:string):Observable<any>{
    const headers = new HttpHeaders({
      Authorization:'Bearer BQDY1ac2gUcNSCkyVk7N2w7gixlNTFvLwTYt47AC7WRjYCRxMcigD7b5WV-QqN91JTxurmExft8qo4c6fBs'
    })
    return this.http.get(`https://api.spotify.com/v1/search?q=${artist}&type=artist&limit=10`,{headers})
      .pipe(
        map((data:any)=>data.artists.items)
      )
  }
  getArtist(id:string):Observable<any>{
    const headers = new HttpHeaders({
      Authorization:'Bearer BQDY1ac2gUcNSCkyVk7N2w7gixlNTFvLwTYt47AC7WRjYCRxMcigD7b5WV-QqN91JTxurmExft8qo4c6fBs'
    })
    return this.http.get(`https://api.spotify.com/v1/artists/${id}`,{headers})
  }
  getTranks(id:string):Observable<any>{
    const headers = new HttpHeaders({
      Authorization:'Bearer BQDY1ac2gUcNSCkyVk7N2w7gixlNTFvLwTYt47AC7WRjYCRxMcigD7b5WV-QqN91JTxurmExft8qo4c6fBs'
    })
    return this.http.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=ES`,{headers})
    .pipe(
      map((data:any)=>data.tracks)
    )
  }


}
