import { Injectable } from '@angular/core';
import {HttpClient,HttpParams,HttpHeaders} from '@angular/common/http'
import {map} from 'rxjs/operators'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private URL_YOUTUBE:string = "https://www.googleapis.com/youtube/v3/"
  private API_KEY:string = "AIzaSyBzpB5sRf0F-v2Fq_bvGA04mb6R8ROI-io"
  private PLAYLIST_ID:string = "UUq19-LqvG35A-30oyAiPiqA"
  private nextPageToken = ""
  constructor(
    public http:HttpClient
  ) {

  }

  getVideos():Observable<any>{
    let url = `${this.URL_YOUTUBE}playlistItems`
    let params = new HttpParams()
      .set('part','snippet')
      .set('maxResults','10')
      .set('playlistId',this.PLAYLIST_ID)
      .set('key',this.API_KEY)
      .set('pageToken',this.nextPageToken)


    // return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=UUq19-LqvG35A-30oyAiPiqA&key=AIzaSyBzpB5sRf0F-v2Fq_bvGA04mb6R8ROI-io')
    return this.http.get(url,{params}).pipe(
      map((res:any)=>{
        this.nextPageToken = res.nextPageToken
        return res
      })
    )
  }
}
