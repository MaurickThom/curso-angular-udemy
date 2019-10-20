import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as DB from '../../assets/data'
import { IHeroe } from '../models/IHero';
import { Observable,of,throwError } from 'rxjs';

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
  getHeroById(id:string | number):Observable<IHeroe | any>{
    const hero = this.HEROES[+id]
    if(!hero)  return throwError({
      msg:`El usuario con el id ${id} no existe`
    }); 
    return of(hero)
  }
  getHeroesByName(name:string):Observable<IHeroe[] | any>{
    const hero:IHeroe[] = this.HEROES.filter(hero=>hero.nombre.toLowerCase().includes(name.toLowerCase()))
    if(!hero.length)  return throwError({
      msg:`El usuario con el nombre ${name} no existe`
    }); 
    return of(hero)
  }
}
