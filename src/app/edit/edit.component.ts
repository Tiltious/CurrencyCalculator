import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { Currency } from '../currency';
import { FormBuilder, Validators } from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  hiddenCur=false;
  back(){
    this._location.back();
  }
  curEditForm:any;
  constructor(private curserv: CurrencyService,private formBuilder:FormBuilder,private _location:Location) {
    this.curEditForm = this.formBuilder.group({
      _id:[''],code:[''],name:[''],rate:['',Validators.min(0)],inverseRate:['']
    })    
  }


  public get id(){return this.curEditForm.get('_id')}
  public get code(){return this.curEditForm.get('code')}
  public get name(){return this.curEditForm.get('name')}
  public get rate(){return this.curEditForm.get('rate')}
  public get inverseRate(){return this.curEditForm.get('inverseRate')}


  ngOnInit(): void {this.getAllCurr();}


  currs:any[]=[]
  getAllCurr(){
    this.curserv.getAllCurrenciesEdit().subscribe((res:any)=>{
      for(let cur of res){
        this.currs.push(new Currency(cur._id,cur.code,cur.name,cur.rate,cur.inverseRate))
      };
    })
  }

  calcInvRate(rate:any){return Number.parseFloat((1/rate).toPrecision(14))}

  
  setFormValue(curr:any){
    this.selectedCur = curr;
    this.curEditForm.setValue(this.selectedCur);
    this.hiddenCur = !this.hiddenCur;
  }

  selectedCur:any;
  onSubmitEdit(){
    const body = {
      code:this.curEditForm.value.code,
      name:this.curEditForm.value.name,
      rate:this.curEditForm.value.rate,
      inverseRate:1/this.curEditForm.value.rate
    }

    this.curserv.updateCurrency(this.selectedCur._id,body).subscribe(
      (res)=>{
        console.log(res);
        this.currs.splice(0);
        this.getAllCurr();
        this.selectedCur = null;
        this.hiddenCur =!this.hiddenCur;
      })
  }

}
