import {
        Directive,
        EventEmitter,
        ElementRef,
        HostListener,
        Input,
        Output
      } from '@angular/core';

// ElementRef : mantiene una relacion directa con el elemento que contiene la directiva
// HostListener : crear callbacks

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Output() mouseUp : EventEmitter<boolean> = new EventEmitter()

  // Cuando se esta arrastrando a el y dispara un evento
  @HostListener('dragover',['$event'])
  public onDragEnter(event:any){
    this.mouseUp.emit(true)
  }

  // cuando ya no este arrastrando
  @HostListener('dragleave',['$event'])
  public onDragLeave(event:any){
    this.mouseUp.emit(false)
  }

  constructor() { }

  // soltar
  @HostListener('drop',['$event'])
  public onDrop(event:any){

    this.mouseUp.emit(false)
  }

  //
  private _getDataTransfer = (event:any)=>(
    event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer
  )

}
