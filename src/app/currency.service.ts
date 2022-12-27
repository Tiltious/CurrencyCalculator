import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private userhttp:HttpClient) { }
  public getCurrency(){ 
    return this.userhttp.get('/api'+'/getAll');
  } 
  public postCurrency(user:any) {
    return this.userhttp.post('https://realestate-77564-default-rtdb.europe-west1.firebasedatabase.app/User.json',user);
  }
  public updateCurrency() {
    return ;
  }  
  public deleteCurrency(user_id:any,index:any) {
   return this.userhttp.delete('https://realestate-77564-default-rtdb.europe-west1.firebasedatabase.app/User/'+user_id+'.json');
  }
}
