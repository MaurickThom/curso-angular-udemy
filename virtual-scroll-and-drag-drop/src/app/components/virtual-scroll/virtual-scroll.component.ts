import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss']
})
export class VirtualScrollComponent implements OnInit {

  constructor() { }
  persons = Array(500).fill(0)
  // persons =  Array.from({length: 100000})
  ngOnInit(): void {
    // console.log(this.persons);
  }

}
