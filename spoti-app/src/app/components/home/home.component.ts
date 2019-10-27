import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private songs:any[] = []
  private loading:boolean
  private error:boolean = false
  private msgError:string
  constructor(
    private spotify:SpotifyService
    ) {
      this.loading = true
      this.spotify.getNewsReleases().subscribe(data=>{
          this.songs = data
          this.loading = false 
        },
        err=>{
          this.error= true
          this.loading = false
          this.msgError = err.message
        }
      )
    }

  ngOnInit() {
    
  }

}
