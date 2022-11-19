import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  public isLoggedIn(){
    console.log(!!localStorage.getItem('token'),"authserv");
    return !!localStorage.getItem('token');
  }  
}
 