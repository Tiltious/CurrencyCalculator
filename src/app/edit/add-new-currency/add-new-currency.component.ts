import { Component, OnInit } from '@angular/core';
import { FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { CurrencyService } from 'src/app/currency.service';
import {Location} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-currency',
  templateUrl: './add-new-currency.component.html',
  styleUrls: ['./add-new-currency.component.css']
})
export class AddNewCurrencyComponent implements OnInit {
  back(){
    this._location.back();
  }
  curAddForm:any;
  constructor(private curserv: CurrencyService,private formBuilder:FormBuilder,private _location:Location,private router:Router) {
    this.curAddForm = this.formBuilder.group({
      code:[''],alphaCode:[''],numericCode:[''],name:[''],rate:['',Validators.min(0)],date:[''],inverseRate:['']
    })
  }

  public get code(){return this.curAddForm.get('code')}
  public get alphaCode(){return this.curAddForm.get('alphaCode')}
  public get numericCode(){return this.curAddForm.get('numericCode')}
  public get name(){return this.curAddForm.get('name')}
  public get rate(){return this.curAddForm.get('rate')}
  public get date(){return this.curAddForm.get('date')}
  public get inverseRate(){return this.curAddForm.get('inverseRate')}
  
  onSubmitAdd(){
    this.inverseRate.setValue(Number.parseFloat((1/this.curAddForm.value.rate).toPrecision(14)));
    const reqbody = this.curAddForm.value;
    this.curserv.postCurrency(reqbody).subscribe((res)=>{
      console.log(res)
    })
    this.curAddForm.reset();
    this.router.navigate(['edit'])
  }

  ngOnInit(): void {
  }

}
