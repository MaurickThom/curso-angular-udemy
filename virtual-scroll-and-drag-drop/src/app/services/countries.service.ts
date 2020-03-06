import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private URI = 'https://restcountries.eu/rest/v2/lang/es'
  constructor(
    private http:HttpClient
  ) { }
  getCountries():Observable<any>{
    return this.http.get<any>(this.URI)
  }
}
