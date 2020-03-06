import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { CdkDragDrop,moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  countries = []
  constructor(
    private _apiCountries : CountriesService
  ) {

    this._apiCountries.getCountries().subscribe((data:any)=>{
      this.countries.push(...Object.values(data))
    })
  }

  ngOnInit(): void {
    console.log(this.countries);
  }
  drop($event:CdkDragDrop<any>){
    let pais = {...this.countries[$event.previousIndex]}
    this.countries.splice($event.previousIndex,1)
    this.countries.splice($event.currentIndex,0,pais)

    // moveItemInArray(this.countries,$event.previousIndex,$event.currentIndex)
  }
}
