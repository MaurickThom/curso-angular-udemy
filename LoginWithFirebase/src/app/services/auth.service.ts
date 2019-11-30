import { Injectable } from '@angular/core';
import { IUser } from '../models/IUser.interface';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // crear nuevos usuarios
  private SIGN_UP = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]'

  // login
  private SIGN_IN = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]'

  private API_KEY = 'AIzaSyDu_c6yMzSVJF7fYAP87_koB86AWIB7FS0'
  private URL = 'https://identitytoolkit.googleapis.com/v1/'
  userToken:string

  constructor(
    private http:HttpClient
  ) {
    this.readToken()
  }

  logOut(){

  }
  logIn(user:IUser){
    const authData = {
      ...user,
      returnSecureToken:true
    }
    return this.http.post<any>(`${this.URL}accounts:signInWithPassword?key=${this.API_KEY}`,authData)
    .pipe(
      map(response=>{
        console.log('map rxjs');
        this.saveToken(response['idToken'])
        return response
      })
    )
  }
  register(user:IUser):Observable<any>{
    const authData = {
      ...user,
      returnSecureToken:true
    }
    return this.http.post(`${this.URL}accounts:signUp?key=${this. API_KEY}`,authData)
    .pipe(
      map(response=>{
        console.log('map rxjs');
        this.saveToken(response['idToken'])
        return response
      })
    )
  }

  private saveToken(idToken:string){
    this.userToken = idToken
    localStorage.setItem('token',idToken)
  }
  private readToken(){
    this.userToken = localStorage.getItem('token') || ''
    return this.userToken
  }
}
