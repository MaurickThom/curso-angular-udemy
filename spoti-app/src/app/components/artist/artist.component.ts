import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  private isLoading:boolean
  private artist:any
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
        this.isLoading = false
      })
    })
  }

}
