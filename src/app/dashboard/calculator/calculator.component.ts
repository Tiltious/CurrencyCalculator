import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Currency } from 'src/app/currency';
import { CurrencyService } from 'src/app/currency.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  currencies:Currency[] = []
  conform:FormGroup;
  constructor(private fromBuilder:FormBuilder,private curserv:CurrencyService) {
    this.getCurrencies();
    this.conform = this.fromBuilder.group({
      Currency1:['0'],
      Cur1Amount:[1],
      Currency2:['0']      
    })
  }
  get Currency1(){return this.conform.get('Currency1');}
  get Cur1Amount(){return this.conform.get('Cur1Amount');}
  get Currency2(){return this.conform.get('Currency2');}
  ngOnInit(): void {
  }
  
  public convert():number{
    let c1 = this.currencies[this.Currency1?.value].inverseRate;
    let c2 = this.currencies[this.Currency2?.value].rate;
    const num = c1*c2*this.Cur1Amount?.value;
    return Number.parseFloat(num.toPrecision(8));
  }
  
  public getCurrencies(){
    this.curserv.getCurrency().subscribe((res:any)=>{
      for(let cur of res){
        this.currencies.push(new Currency(cur._id,cur.code,cur.name,cur.rate,cur.inverseRate))
      };
    })  
  }

}
