import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collections-card',
  templateUrl: './collections-card.component.html',
  styleUrls: ['./collections-card.component.scss']
})
export class CollectionsCardComponent implements OnInit {

  @Input('movies') movies:any[];
  @Input('titleGallery') titleGallery:string
  constructor() { }

  ngOnInit() {
  }

}
