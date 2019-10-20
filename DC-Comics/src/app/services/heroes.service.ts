import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as DB from '../../assets/data'
import { IHeroe } from '../models/IHero';
import { Observable,of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private HEROES:IHeroe[] = DB.HEROES
  constructor(
    private http:HttpClient
  ) { }

  getHeroes():Observable<IHeroe[]>{
    return of(this.HEROES)
  }
  
}
