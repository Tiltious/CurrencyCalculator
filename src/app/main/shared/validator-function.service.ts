import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { User } from 'src/app/user';
import { UserServiceService } from 'src/app/user-service.service';
import { ValidatorService } from './validator.service';

@Injectable({
  providedIn: 'root'
})
export class ValidatorFunctionService {
  private users:any=[];
  constructor(private validation:ValidatorService,private userv:UserServiceService,) {
    this.userv.getUsersApi().subscribe((users:any)=>{for(let i in users){this.users.push(users[i])}})
  }

  uniqueUsername():ValidatorFn{
    return (control:AbstractControl): ValidationErrors | null=>{
      let res:any=this.validation.uniqueUsername(this.users,control.value);
      return res?{'uniqueUsername':true,'val':res}:null; 
    };
  }
  uniqueEmail():ValidatorFn{
    return (control:AbstractControl): ValidationErrors | null=>{
      let res:any=this.validation.uniqueEmail(this.users,control.value);
      return res?{'uniqueEmail':true,'val':res}:null;
      //I did it!
    };
  }
}
