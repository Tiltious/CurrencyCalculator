import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { Currency } from '../currency';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  curEditForm:any;
  constructor(private curserv: CurrencyService,private formBuilder:FormBuilder) {
    this.curEditForm = this.formBuilder.group({
      currencies:[''],
      rate:['',Validators.min(0)],
    });
    this.getAllCurr();
    
  }
  get currencies(){return this.curEditForm.get('currencies')}

  get rate(){return this.curEditForm.get('rate')}

  get inverseRate(){return this.curEditForm.get('inverseRate')}
  ngOnInit(): void {
  }
  calcInvRate(){
    return Number.parseFloat((1/this.rate.value).toPrecision(14))
  }
  onSubmitEdit(){}
  currs:any[]=[]
  getAllCurr(){
    this.curserv.getAllCurrenciesEdit().subscribe((res:any)=>{
      for(let cur of res){
        this.currs.push(new Currency(cur._id,cur.code,cur.name,cur.rate,cur.inverseRate))
      };
    })
  }

}
