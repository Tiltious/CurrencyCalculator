import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/user';
import { UserServiceService } from 'src/app/user-service.service';
import { ValidatorFunctionService } from '../shared/validator-function.service';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  userform:any;
  hidden:boolean = true;
  ai:number =0;
  @Output() posted: EventEmitter<any> =  new EventEmitter();
  constructor(private formBuilder:FormBuilder,private userv:UserServiceService,private validator:ValidatorFunctionService) {
    this.userform = this.formBuilder.group({
      username:['',[Validators.required, Validators.minLength(6), Validators.maxLength(15), this.validator.uniqueUsername()]],
      email:['',[Validators.required, Validators.email, this.validator.uniqueEmail()]],
      // Regex pattern allows only passwords with at least 8 characters, 1 upper case, 1 digit, 1 special character
      password:['',[Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]]
    })
  }
  get username(){return this.userform.get('username');}

  get email(){return this.userform.get('email');}

  get password(){return this.userform.get('password');}

  onSubmit():void{    
    this.userv.postUser(this.userform.value).subscribe(
      (posteduser:any)=>{
        console.log('serv',posteduser);
        this.posted.emit(posteduser.name);
      }
    );
    console.log('cac');
    this.userform.reset();
  }
  
  ngOnInit(): void {}

}
