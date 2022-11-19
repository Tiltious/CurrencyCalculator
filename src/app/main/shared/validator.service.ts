import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }
  uniqueUsername(users:any,newuser:any){
    for(let i in users){
      if(users[i].username==newuser)return true;
    }
    return false;
  }
  uniqueEmail(users:any,email:any){
    for(let i in users){
      if(users[i].email==email)return true;
    }
    return false;
  }
}
 