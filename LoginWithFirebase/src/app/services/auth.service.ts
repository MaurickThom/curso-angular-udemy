import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { IUser } from '../models/IUser.interface';

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

  constructor(
    private http:HttpClient
  ) { }

  logOut(){

  }
  logIn(user:IUser){

  }
  register(user:IUser){

  }
}
