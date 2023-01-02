export class Currency {
    _id:String;
    code:String;
    name:String;
    rate:number;
    inverseRate:number;
    constructor(_id:String,code:String,name:String,rate:number,inverseRate:number){
        this._id=_id;this.code = code;this.name = name;this.rate =rate;this.inverseRate=inverseRate;
    }  
}