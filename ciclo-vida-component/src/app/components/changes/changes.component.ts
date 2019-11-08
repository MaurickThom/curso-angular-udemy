import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-changes',
  templateUrl: './changes.component.html',
  styleUrls: ['./changes.component.scss']
})
export class ChangesComponent implements OnInit,OnDestroy {

  @Input() input;
  @Output() out= new EventEmitter<any>()
  constructor() { }

  ngOnInit() {
    console.log('ngOnInitHijo ',this.input)
  }
  ngOnChanges(){
    console.log('cambios hijo componente',this.input)
  }
  fnEmit($event){
    this.input = $event.target.value
    this.out.emit(this.input)
  }
  ngOnDestroy(): void {
    console.log('Componente en destruccion changes.component.ts');
  }
}
