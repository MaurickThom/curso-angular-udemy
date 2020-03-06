import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss']
})
export class VirtualScrollComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport
  inicio:boolean = true
  constructor() { }
  persons = Array(500).fill(0)
  // persons =  Array.from({length: 100000})
  ngOnInit(): void {
    // console.log(this.persons);
  }
  irFinal(){
    this.viewport.scrollToIndex(this.persons.length)
    this.inicio = false
  }
  irInicio(){
    this.viewport.scrollToIndex(0)
    this.inicio = true
  }
  irAlMedio(){
    this.viewport.scrollToIndex(this.persons.length/2)
  }
}
