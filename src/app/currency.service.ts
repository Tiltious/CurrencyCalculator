import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private userhttp:HttpClient) { }
  public getAllCurrencies(){ 
    const httpOptions = {
      headers: new HttpHeaders({
        'x-access-token' :`${localStorage.getItem('token')}`
      })
    };  
    return this.userhttp.get('/api'+'/curr/allCurr',httpOptions);
  }
  public getAllCurrenciesEdit(){ 
    const httpOptions = {
      headers: new HttpHeaders({
        'x-access-token' :`${localStorage.getItem('token')}`
      })
    };  
  return this.userhttp.get('/api'+'/curr/allCurrEdit',httpOptions);
  }
  public postCurrency(user:any) {
    return this.userhttp.post('/api'+'',user);
  }
  public updateCurrency() {
    return ;
  }  
  public deleteCurrency(user_id:any,index:any) {
   return this.userhttp.delete('/api'+user_id+'.json');
  }
}
