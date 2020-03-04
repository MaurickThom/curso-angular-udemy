import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  videos:[] = []
  constructor(
    private apiYoutube:YoutubeService
  ) {
    this.apiYoutube.getVideos().subscribe(msg=>{
      this.videos = msg.items
    })
  }
  cargarMas(){
    this.apiYoutube.getVideos().subscribe((msg:{items:[]})=>{
      this.videos.push(...msg.items)
    })
  }

  ngOnInit(): void {
  }

}
