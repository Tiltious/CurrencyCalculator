import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { Currency } from '../currency';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private curserv: CurrencyService) {this.getAllCurr()}

  ngOnInit(): void {
  }
  currs:Currency[]=[]
  getAllCurr(){
    this.curserv.getAllCurrenciesEdit().subscribe((res:any)=>{
      for(let cur of res){
        this.currs.push(new Currency(cur._id,cur.code,cur.name,cur.rate,cur.inverseRate))
      };
    })
  }

}
