import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private userhttp:HttpClient) {}
  /*
  public getUsers(){ 
    return this.userhttp.get('https://realestate-77564-default-rtdb.europe-west1.firebasedatabase.app/User.json');
  }
  */
  public getUsersApi(){ 
    return this.userhttp.get('/api'+'/test/all');
  }
  public loginApi(reqbody:any){
    return this.userhttp.post('/api'+'/auth/signin',reqbody);
  }
  public postUserApi(reqbody:any) {
    return this.userhttp.post('/api'+'/auth/signup',reqbody);
  }
/*
  public postUser(user:any) {
    return this.userhttp.post('https://realestate-77564-default-rtdb.europe-west1.firebasedatabase.app/User.json',user);
  }
*/
  public updateUser() {
    return ;
  }  
  public deleteUser(user_id:any,index:any) {
   return this.userhttp.delete('/api'+''+user_id+'.json');
  }
}
