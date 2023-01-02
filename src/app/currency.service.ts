import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  constructor(private userhttp:HttpClient) { }
  public getAllCurrencies(){      
    return this.userhttp.get('/api'+'/curr/allCurr',{headers: new HttpHeaders({'x-access-token' :`${localStorage.getItem('token')}`})});
  }
  public getAllCurrenciesEdit(){       
    return this.userhttp.get('/api'+'/curr/allCurrEdit',{headers: new HttpHeaders({'x-access-token' :`${localStorage.getItem('token')}`})});
  }
  public postCurrency(curr:any) {
    return this.userhttp.post('/api'+'',curr);
  }
  public updateCurrency(id:String,body:any) {
    console.log(id,body,'/api'+'/curr/currForEdit/'+id)
    return this.userhttp.put('/api'+'/curr/currForEdit/'+id,body,{headers: new HttpHeaders({'x-access-token' :`${localStorage.getItem('token')}`})});
  }  
  public deleteCurrency(user_id:any,index:any) {
   return this.userhttp.delete('/api'+user_id+'.json');
  }
}
