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
  createUser(name:string,country:string):Observable<any>{
    const formData = new FormData()
    formData.append('name',name)
    formData.append('country',country)
    return this.http.post('api/users',formData)
  }
}
