export class Currency {
    id:String;
    code:String;
    name:String;
    rate:number;
    inverseRate:number;
    constructor(id:String,code:String,name:String,rate:number,inverseRate:number){
        this.id=id;this.code = code;this.name = name;this.rate =rate;this.inverseRate=inverseRate;
    }  
}