import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import {Image} from 'src/app/models/image'
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('image') image:Image = {}

  ngOnInit(): void {
  }

}
