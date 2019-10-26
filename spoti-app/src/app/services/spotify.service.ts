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
      Authorization:'Bearer BQBhjvofwfU4JstV11T1A2of8r6D-tLBVItZ3FNXb1N0reLzQE5GdE8UV163Ox-yLdPUxHAV0xB2Xx_lz48'
    })
    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers})
  }
}
