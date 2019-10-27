import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import {FormControl} from '@angular/forms';
import {Observable, Subscription}  from 'rxjs';
import {debounceTime, filter, tap} from 'rxjs/operators';
import  {throttleTime} from 'rxjs/operators';
import {fromEvent} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private artistControl  = new FormControl(); 
  private artists:any[] = []
  private formCtrlSub: Subscription;
  private loading:boolean
  constructor(
    private apiSpotify:SpotifyService
  ) { }

  ngOnInit() {
    this.formCtrlSub = this.artistControl.valueChanges
      .pipe(
        debounceTime(1000)
      ).subscribe(data=>{
        this.apiSpotify.getArtists(data).subscribe((response:any)=>{
          this.artists = response
          this.loading = false
        })
      })
  }
  search(value:string){
    this.loading = true
  }
  ngDoCheck() { 
    console.log('change detection')
  }
  ngOnDestroy() {
    this.formCtrlSub.unsubscribe();
  }
}