import {
        Directive,
        EventEmitter,
        ElementRef,
        HostListener,
        Input,
        Output
      } from '@angular/core';
import { FileItems } from '../models/file-items';

// ElementRef : mantiene una relacion directa con el elemento que contiene la directiva
// HostListener : crear callbacks

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Input('files') files:FileItems[] = []
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
    const dataTransfer = this._getDataTransfer(event)
    this.mouseUp.emit(false)
    if(!dataTransfer) return
    this._extractFile(dataTransfer.files)
    this._preventOpenImage(event)
  }

  // Validaciones

  // tenemos que evitar que el navegador habra por defecto la imagen despues de arrastrar a soltar
  private _preventOpenImage = (event:any) => {
    event.preventDefault()
    event.stopPropagation()
  }

  // validar que la imagen ya este en la caja antes de enviar a firebase
  private _fileAlreadyPublished(nameFile:string):boolean{
    return this.files.filter(file=>file.nameFile===nameFile).length ? true : false
  }


  // nos ayudara en la compatibilidad de navegadores
  // ya que interpretan de diferentes maneras el drag an drop
  private _getDataTransfer = (event:any)=>(
    event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer
  )

  // validacion para ver si es imagen
  private _isImage = (typeOfFile:string):boolean =>(
    ( typeOfFile === ''  || typeOfFile === undefined ) ?
      false : typeOfFile.startsWith('image')
  )
  // validacion del archivo
  private _validationFile(file:File):boolean{
    if( !this._fileAlreadyPublished(file.name) &&
        this._isImage(file.type) ){
      return true
    }
    return false
  }

  private _extractFile(fileList:FileList){
    Object.keys(fileList).map(key=>{
      const file:File = fileList[key]
      if(this._validationFile(file)){
        const newFile  = <FileItems> {
          file,
          isUpload:false,
          nameFile:file.name,
          progress:0,
          url:''
        }

      }
    })

  }
}
