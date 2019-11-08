import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-changes',
  templateUrl: './changes.component.html',
  styleUrls: ['./changes.component.scss']
})
export class ChangesComponent implements OnInit {

  @Input() input;
  @Output() out= new EventEmitter<any>()
  constructor() { }

  ngOnInit() {
    console.log(this.input)
  }
  fnEmit($event){

    this.input = $event.target.value
    this.out.emit(this.input)
  }
}
