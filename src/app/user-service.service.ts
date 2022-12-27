import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private userhttp:HttpClient) {}

  public getUsers(){ 
    return this.userhttp.get('https://realestate-77564-default-rtdb.europe-west1.firebasedatabase.app/User.json');
  } 
  public getUsersApi(){ 
    return this.userhttp.get('/api'+'/getAllUsers');
  } 
  public postUser(user:any) {
    return this.userhttp.post('https://realestate-77564-default-rtdb.europe-west1.firebasedatabase.app/User.json',user);
  }
  public updateUser() {
    return ;
  }  
  public deleteUser(user_id:any,index:any) {
   return this.userhttp.delete('https://realestate-77564-default-rtdb.europe-west1.firebasedatabase.app/User/'+user_id+'.json');
  }
}
