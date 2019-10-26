import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private songs:any[] = []
  constructor(
    private spotify:SpotifyService
    ) { 
      this.spotify.getNewsReleases().subscribe(data=>{
        this.songs = data.albums.items
      })
    }

  ngOnInit() {

  }

}
