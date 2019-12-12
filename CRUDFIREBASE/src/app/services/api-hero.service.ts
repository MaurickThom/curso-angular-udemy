import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../models/hero.interface';
import { Observable } from 'rxjs';
import {map, reduce, delay} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiHeroService {

  private URL = 'https://crud-c1f51.firebaseio.com'
  constructor(
    private api:HttpClient
  ) { }

  createHero(hero:Hero){
    const {name,status,power} = hero
    return this.api.post(`${this.URL}/heroes.json`,{
      name,
      status,
      power
    }).pipe(
      map( (resp:any)=>{
        hero.id = resp.name
        return hero
      })
    )
  }

  updateHero(hero:Hero){
    const {name,power,status} = hero
    return this.api.put(`${this.URL}/heroes/${hero.id}.json`,{
      name,
      power,
      status
    })
  }

  arrHeores(heroes:object){
    return Object.keys(heroes).reduce((acc,id)=>{
      acc.push({
        id,
        ...heroes[id]
      })
      return acc
    },[])
  }
  getAllHeroes(){
    return this.api.get(`${this.URL}/heroes.json`).pipe(
      map(this.arrHeores),
      delay(1000)
    )
  }
}
