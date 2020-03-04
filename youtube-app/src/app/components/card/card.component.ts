import { Component, OnInit, Input } from '@angular/core';
declare var $:any
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('youthcard') youthcard:any
  constructor() { }

  ngOnInit(): void {
    console.log(this.youthcard);
  }
  openModel(){
    $('#exampleModal').modal()
  }
}
