import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private httpOptions = {
    headers: new HttpHeaders({
      'x-access-token' :`${localStorage.getItem('token')}`
    })
  };
  constructor(private userhttp:HttpClient) { }
  public getAllCurrencies(){ 
      
    return this.userhttp.get('/api'+'/curr/allCurr',this.httpOptions);
  }
  public getAllCurrenciesEdit(){ 
      
    return this.userhttp.get('/api'+'/curr/allCurrEdit',this.httpOptions);
  }
  public postCurrency(user:any) {
    return this.userhttp.post('/api'+'',user);
  }
  public updateCurrency(id:String,body:any) {
    return this.userhttp.put('/api'+'/curr/currForEdit/:_'+id,body,this.httpOptions);
  }  
  public deleteCurrency(user_id:any,index:any) {
   return this.userhttp.delete('/api'+user_id+'.json');
  }
}
