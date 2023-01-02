import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
  canActivate(){
    let roles:any = localStorage.getItem('roles')?.split(',');
    for(let i of roles){
      console.log(i)
      if (i=='ROLE_ADMIN') {
        console.log('ok admin')
        return true;
      }
    }
    alert("You don't have admin rights.")
    return false;
  } 
  
}
