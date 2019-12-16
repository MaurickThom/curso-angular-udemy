import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Mark } from 'src/app/models/mark.class';
import { ThrowStmt } from '@angular/compiler';
import { MatSnackBar, MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit ,AfterViewInit {
  ngOnInit(): void {
  }
  marks : Mark[] = []
  // title = 'angular-gmap';
  // @ViewChild('mapContainer', { static: false }) gmap: ElementRef;

  // map: google.maps.Map;
  lat:number = 40.73061;
  lng:number = -73.935242;

  // coordinates = new google.maps.LatLng(this.lat, this.lng);

  // mapOptions: google.maps.MapOptions = {
  //   center: this.coordinates,
  //   zoom: 8
  // };

  // marker = new google.maps.Marker({
  //   position: this.coordinates,
  //   map: this.map,
  //   title: 'Hello World!'
  // });

  ngAfterViewInit() {
    // this.mapInitializer();
  }

  // mapInitializer() {
  //   this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
  //   this.marker.setMap(this.map);
  // }
  constructor(
    private _snackBar: MatSnackBar,
    public _dialog:MatDialog
  ){

    // Esto se ve asqueroso ,perdon por este codigo , tengo que salir y quiero terminar rapido esta mierda
    // lógica en el constructor metodos que no respetan SOLID , un webo de antipatrones
    // esto quedará para el thom del futuro y no deje un curso postergado por meses
    if(localStorage.getItem('marks')){
      this.marks = JSON.parse(localStorage.getItem('marks'))
    }else{
      const mark = new Mark(this.lat,this.lng)
      this.marks.push(mark)
      this.saveLocalStorage()
    }
  }
  addMark($event){
    const {lat,lng} = $event.coords
    this.marks.push(new Mark(lat,lng))
    this.saveLocalStorage()
    this._snackBar.open('Marcador agregado','cerrar', {
      duration: 1000
    });
  }
  saveLocalStorage(){
    if(!this.marks.length){
      const mark = new Mark(this.lat,this.lng)
      this.marks.push(mark)
    }
    localStorage.setItem('marks',JSON.stringify(this.marks))

  }
  deleteMark(index:number){
    this.marks.splice(index,1)
    this.saveLocalStorage()
    this._snackBar.open('Marcador eliminado','cerrar', {
      duration: 1000
    });
  }
  editMark(mark:Mark,index:number){
    const dialogRef = this._dialog.open(DialogComponent,{
      width:'400px',
      height:'300px',
      data:{
        mark,
        index
      }
    })
    dialogRef.afterClosed().subscribe((result:any)=>{
      if(!result) return
      const {mark,index} = result
      this.marks[index] = mark
      this.saveLocalStorage()
    })
  }

}
