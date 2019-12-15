import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit ,AfterViewInit {
  ngOnInit(): void {
  }
  // title = 'angular-gmap';
  // @ViewChild('mapContainer', { static: false }) gmap: ElementRef;

  // map: google.maps.Map;
  lat = 40.73061;
  lng = -73.935242;

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

}
