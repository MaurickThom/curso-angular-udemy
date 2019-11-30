import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private api:AuthService,
    private router:Router
  ){}
  canActivate(
    next: ActivatedRouteSnapshot, // cual es la siguiente ruta al cual el usuario quiere ingresar
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.api.isAuthenticated())
      return true
    this.router.navigateByUrl('/login')
  }

}
