import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  private isLoading:boolean
  private artist:any
  private songs :any[]= []
  constructor(
    private activatedRoute:ActivatedRoute,
    private apiSpotify:SpotifyService
  ) { }

  ngOnInit() {
    this.isLoading = true
    this.activatedRoute.params.subscribe(observer=>{
      const {id} = observer
      this.apiSpotify.getArtist(id).subscribe(data=>{
        this.artist = data
        
        this.apiSpotify.getTranks(id).subscribe(response=>{
          this.songs = response
          console.log(this.songs);
          this.isLoading = false
        })
      })
    })
  }

}
