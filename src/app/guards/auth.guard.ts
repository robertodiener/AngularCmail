import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private roteador: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    if(localStorage.getItem('TOKEN')){
      console.dir(route);
      return true;
    } else {
      this.roteador.navigate(['']);
      return false;
    }
  }

 
}
