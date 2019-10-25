import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http:HttpClient
  ) { }


  getNewsReleases():Observable<any>{
    const headers = new HttpHeaders({
      Authorization:'Bearer BQDsTGIEEsngJmT2qiWX07qdTyuUzKsKMWGs9ySRLbxCrlRd92cRGRqmnZ5TG99R0ksF7Bmbit1WWLLO300'
    })
    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers})
  }
}
