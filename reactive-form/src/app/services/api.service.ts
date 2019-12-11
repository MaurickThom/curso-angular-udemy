import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import {map,filter, isEmpty,delay, tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http:HttpClient
  ) { }

  checkEmailNotTaken(email: string):Observable<any>{
    return this.http.get('assets/DB.json').pipe(
      map((data:any)=>data.users.filter(user => user.email === email)),
      map(users=>!users.length)
    )
  }
  checkUserNameNoyTaken(name: string):Observable<boolean>{
    return this.http.get('assets/DB.json').pipe(
      map((data:any)=>data.users.filter(user => user.name === name)),
      map(users=>!users.length)
    )
  }
}
