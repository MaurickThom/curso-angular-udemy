import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';
import {HttpClient} from  '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ArrEmployeeService {
  constructor(
    private http:HttpClient
  ) { }

  getUsers():Observable<Employee[]>{
    return this.http.get<Employee[]>('api/users')
  }
  getUser(id:number | string):Observable<Employee>{
    return this.http.get<Employee>(`api/users/${id}`)
  }
}
