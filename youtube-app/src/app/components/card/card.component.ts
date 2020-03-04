import { Component, OnInit, Input } from '@angular/core';
declare var $:any
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  _video:any = {}
  @Input('youthcard') youthcard:any
  constructor() {

  }

  ngOnInit(): void {
    this._video = {...this.youthcard}
  }
  openModal(){
    $('#exampleModal').modal()
    console.log(this._video);
  }
  closeVideo(){
    this._video = null
    $('#exampleModal').modal('hide')
  }
}
